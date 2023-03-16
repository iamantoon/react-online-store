import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {sortProducts} from './../../store/storeSlice';

import Product from '../../components/Product/Product';
import MySelect from '../../components/UI/select/MySelect';
import MyInput from '../../components/UI/input/MyInput';

import './style.css';

const Products = ({search, setSearch, searchedAndSortedProducts, myUkrainianArray}) => {
    const [selectedSort, setSelectedSort] = useState('');

    const items = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    const sortProductsBy = (sort) => {
        setSelectedSort(sort);
        dispatch(sortProducts({sort}));
    }

    return (
        <>
            <header>
                <div className="container">
                    <h2 className="products-title">Experience convenience and affordability with us. From gadgets to accessories, we offer high-quality products at a low cost. Shop with confidence knowing that our commitment to quality and reliability will exceed your expectations.</h2>
                </div>
            </header>
            <section>
                <div className="container">
                    <MySelect value={selectedSort} onChange={sortProductsBy} options={[
                        {value: 'price-ascending', name: 'Sort by price - ascending'},
                        {value: 'price-descending', name: 'Sort by price - descending'},
                        {value: 'title', name: 'Sort by name'},
                        {value: 'id', name: 'Sort by default'},
                    ]} defaultValue="Sort by" />
                    <MyInput type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name"  />
                    <ul className="products">
                        {searchedAndSortedProducts.map((item) => 
                            <Product 
                                key={item.id} 
                                img={item.img} 
                                title={item.title} 
                                description={item.description}
                                price={item.price} 
                                id={item.id} 
                                sale={item.sale}
                                saleColor={item.saleColor}
                                wishlist={item.wishlist}
                                
                                myUkrainianArray={myUkrainianArray}
                            />
                        )}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Products;