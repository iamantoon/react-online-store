import {NavLink} from 'react-router-dom';
import cart from './../../images/icons/black-cart.svg';

const Product = ({img, title, price, id, sale, saleColor, addProductToCart}) => {

    const priceColor = {
        color: saleColor,
        fontSize: 17
    };

    return (
        <li className="product-item">
            <NavLink to={`/product/${id}`}>
                <img src={img} alt={title} className="product-item__img" />
            </NavLink>
            <div className="product-item__description">
                {sale 
                ?   <div>
                        <h4 className="product-item__title">{title}</h4>
                        <h5 style={priceColor} className="product-item__price">{price} $ <span className="product-item__sale">  {sale} $</span></h5>
                    </div>
                :   <div>
                        <h4 className="product-item__title">{title}</h4>
                        <h5 className="product-item__price">{price} $</h5>
                    </div>
                }
                <button onClick={() => addProductToCart(id)}>
                    <img src={cart} alt="Add to the cart" />
                </button>
            </div>
        </li>
    );
}
 
export default Product;