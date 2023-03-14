import {useState, useMemo} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {useSelector} from 'react-redux';

import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import About from './pages/About/About';
import Cart from './components/Cart/Cart';
import Product from './pages/Product/Product';
import NewsPage from './pages/NewsPage/NewsPage';
import Store from './pages/Store/Store';
import Accessories from './pages/Accessories/Accessories';
import Accessory from './pages/Accessory/Accessory';
import Career from './pages/Career/Career';
import Contacts from './pages/Contacts/Contacts';
import Question from './pages/Question/Question';
import Privacy from './pages/Privacy/Privacy';
import Wishlist from './pages/Wishlist/Wishlist';
import Nav from './components/Nav/Nav';
import Footer from './components/footer/Footer';
import ScrollToTop from './utils/scrollToTop.js';

import './style/main.css';
import './style/reset.css';
import './style/cart.css';

function App() {
    const [search, setSearch] = useState('');

    const items = useSelector(state => state.products.products);

    const searchedAndSortedProducts = useMemo(() => {
        // return items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    });

    let myUkrainianArray = [];

    async function convertCurrencies() {
        const uahArray = await Promise.all(items.map(currencyConverter));
        return uahArray;
    }
      
    async function currencyConverter(index) {
        const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
        const data = await response.json();
        const dollar = data[1]['sale'];
        return index.price * dollar;
    }
      
    // Call convertCurrencies() from another async function
    async function someOtherFunction() {
        const uahArray = await convertCurrencies();

        for (let i = 0; i < uahArray.length; i++) {
            myUkrainianArray.push(uahArray[i]);
        }
    }
      
    someOtherFunction();

    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Nav total={items.length} />
                <Routes>  
                    <Route path="/" element={<Home /> } />
                    <Route path="/products" element={<Products   
                        search={search}
                        setSearch={setSearch}
                        searchedAndSortedProducts={searchedAndSortedProducts}
                        myUkrainianArray={myUkrainianArray}
                    />} />
                    <Route path="/:name" element={<Store myUkrainianArray={myUkrainianArray} />} />
                    <Route path="/accessories/:name" element={<Accessories myUkrainianArray={myUkrainianArray} />} />
                    <Route path="/accessory/:id" element={<Accessory myUkrainianArray={myUkrainianArray} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart />} /> 
                    <Route path="/news/:id" element={<NewsPage />} />     
                    <Route path="/product/:id" element={<Product myUkrainianArray={myUkrainianArray} />} />
                    <Route path="/wishlist" element={<Wishlist myUkrainianArray={myUkrainianArray} />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/question" element={<Question />} />
                    <Route path="/privacy" element={<Privacy />} />             
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;