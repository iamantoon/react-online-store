import {NavLink} from "react-router-dom";
import usa from "./../../images/icons/unitedstates.svg";

const Accessory = ({id, title, img, price}) => {
    return (
        <li className="store-item__cart">
            <NavLink to={`/product/${id}`}>
                <div className="cart__container">
                    <h4 className="cart__title">{title}</h4>
                    <img src={img} alt={title} />
                    <p className="cart__price">
                        <img src={usa} alt="usd" />
                        {price} $
                    </p>
                </div> 
            </NavLink>
        </li>
    );
}

export default Accessory;