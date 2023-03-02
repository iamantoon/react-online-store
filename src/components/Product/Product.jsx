import {NavLink} from 'react-router-dom';

import ukraine from "./../../images/icons/ukraine.svg";
import usa from "./../../images/icons/unitedstates.svg";

const Product = ({img, title, price, id, sale, saleColor, addProductToCart}) => {

    const priceColor = {
        color: saleColor,
        fontSize: 17
    };

    return (
        <>
            <svg style={{display: "none"}} xmlns="http://www.w3.org/2000/svg">
                <symbol id="icon-cart">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.2415 3.81149C9.7702 4.30847 9.5 4.94004 9.5 5.5C9.5 5.77614 9.27614 6 9 6C8.72386 6 8.5 5.77614 8.5 5.5C8.5 4.6398 8.90138 3.77137 9.51588 3.12339C10.1339 2.4717 11.0086 2 12 2C12.9914 2 13.8661 2.4717 14.4841 3.12339C15.0986 3.77137 15.5 4.6398 15.5 5.5C15.5 5.77614 15.2761 6 15 6C14.7239 6 14.5 5.77614 14.5 5.5C14.5 4.94004 14.2298 4.30847 13.7585 3.81149C13.2907 3.31822 12.6655 3 12 3C11.3345 3 10.7093 3.31822 10.2415 3.81149Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M17.1289 8H6.87112C6.34466 8 5.90835 8.40818 5.87333 8.93348L5.14 19.9335C5.10152 20.5107 5.55932 21 6.13779 21H17.8622C18.4407 21 18.8985 20.5107 18.86 19.9335L18.1267 8.93348C18.0917 8.40818 17.6554 8 17.1289 8ZM6.87112 7C5.81819 7 4.94559 7.81637 4.87555 8.86696L4.14222 19.867C4.06526 21.0213 4.98086 22 6.13779 22H17.8622C19.0192 22 19.9348 21.0213 19.8578 19.867L19.1245 8.86696C19.0544 7.81637 18.1818 7 17.1289 7H6.87112Z" />
                </symbol>
            </svg>

            <li className="product-item">
                <NavLink to={`/product/${id}`}>
                    <img src={img} alt={title} className="product-item__img" />
                </NavLink>
                <div className="product-item__description">
                    {sale 
                    ?   <div>
                            <h4 className="product-item__title">{title}</h4>
                            <p style={priceColor} className="product-item__price">
                                <img src={usa} alt="usd" />
                                {price} $ <span className="product-item__sale">  {sale} $</span>  
                            </p>
                        </div>
                    :   <div>
                            <h4 className="product-item__title">{title}</h4>
                            <p className="product-item__price">
                                <img src={usa} alt="usd" />
                                {price} $
                            </p>
                        </div>
                    }
                    <button onClick={() => addProductToCart(id)}>
                        <svg className="icon__cart" width="24" height="24">
                            <use href="#icon-cart"></use>
                        </svg>
                    </button>
                </div>
            </li>
        </>
    );
}

export default Product;