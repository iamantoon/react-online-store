import Product from '../../components/Product/Product';
import MySelect from '../../components/UI/select/MySelect';
import MyInput from '../../components/UI/input/MyInput';

import './style.css';

const Products = ({addProductToCart, search, setSearch, selectedSort, sortProducts, searchedAndSortedProducts}) => {
    return (
        <>
            <header>
                <div className="container">
                    <h2 className="products-title">Experience convenience and affordability with us. From gadgets to accessories, we offer high-quality products at a low cost. Shop with confidence knowing that our commitment to quality and reliability will exceed your expectations.</h2>
                </div>
            </header>
            <section>
                <div className="container">
                    <MySelect value={selectedSort} onChange={sortProducts} options={[
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
                                
                                addProductToCart={addProductToCart}
                            />
                        )}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Products;