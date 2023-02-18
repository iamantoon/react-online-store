import {useState, useMemo} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Cart from './components/Cart/Cart';
import Product from './pages/Product/Product';

import Career from './pages/Career/Career';
import Contacts from './pages/Contacts/Contacts';
import Privacy from './pages/Privacy/Privacy';

import Nav from './components/Nav/Nav';
import Footer from './components/footer/Footer';

import allProducts from './helpers/allProducts';

import './style/main.css';
import './style/cart.css';
import './style/reset.css';

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

    return (        
        <div className="App">
            <Router>
                <Nav total={productCartArray.length} />

                <Routes>
                    <Route path="/" element={<Home 
                        productCartArray={productCartArray}
                        setProductCartArray={setProductCartArray} 
                        addProductToCart={addProductToCart} 
                        items={items}
                        search={search}
                        setSearch={setSearch}
                        selectedSort={selectedSort}
                        sortProducts={sortProducts}
                        searchedAndSortedProducts={searchedAndSortedProducts}
                    />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart productCartArray={productCartArray} setProductCartArray={setProductCartArray}/>} /> 
                    <Route path="/product/:id" element={<Product addProductToCart={addProductToCart} />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/privacy" element={<Privacy />} />             
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;