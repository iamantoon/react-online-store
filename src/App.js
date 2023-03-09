import {useState, useMemo} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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
import Nav from './components/Nav/Nav';
import Footer from './components/footer/Footer';
import ScrollToTop from './utils/scrollToTop.js';
import allProducts from './helpers/allProducts';

import './style/main.css';
import './style/reset.css';
import './style/cart.css';

function App() {
    const [items, setItems] = useState(allProducts);
    const [selectedSort, setSelectedSort] = useState('');
    const [search, setSearch] = useState('');
    const [productCartArray, setProductCartArray] = useState([]);

    const sortProducts = (sort) => {
        setSelectedSort(sort);

        if (typeof items[0][sort] === 'string') {
            setItems([...items].sort((a, b) => a[sort].localeCompare(b[sort])));
        } else if (typeof items[0][sort] === 'number') {
            setItems([...items].sort((a, b) => a[sort] - b[sort]));
        } else if (sort === 'price-ascending') {
            setItems([...items].sort((a, b) => a['price'] - b['price']));
        } else if (sort === 'price-descending') {
            setItems([...items].sort((a, b) => b['price'] - a ['price']));
        }
    }

    const addProductToCart = (id) => {
        setProductCartArray((products) => {
            return [ 
                ...products,
                items[id]
            ];
        });
    }

    const searchedAndSortedProducts = useMemo(() => {
        return items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
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
                <Nav total={productCartArray.length} />
                <Routes>  
                    <Route path="/" element={<Home addProductToCart={addProductToCart} />} />
                    <Route path="/products" element={<Products 
                        productCartArray={productCartArray}
                        setProductCartArray={setProductCartArray} 
                        addProductToCart={addProductToCart} 
                        items={items}
                        search={search}
                        setSearch={setSearch}
                        selectedSort={selectedSort}
                        sortProducts={sortProducts}
                        searchedAndSortedProducts={searchedAndSortedProducts}
                        myUkrainianArray={myUkrainianArray}
                    />} />
                    <Route path="/:name" element={<Store items={items} myUkrainianArray={myUkrainianArray} />} />
                    <Route path="/accessories/:name" element={<Accessories myUkrainianArray={myUkrainianArray} />} />
                    <Route path="/accessory/:id" element={<Accessory addProductToCart={addProductToCart} myUkrainianArray={myUkrainianArray} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart productCartArray={productCartArray} setProductCartArray={setProductCartArray}/>} /> 
                    <Route path="/news/:id" element={<NewsPage />} />     
                    <Route path="/product/:id" element={<Product addProductToCart={addProductToCart} myUkrainianArray={myUkrainianArray} />} />
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