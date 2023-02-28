import {NavLink} from "react-router-dom";

import ukraine from "./../../images/icons/ukraine.svg";
import usa from "./../../images/icons/unitedstates.svg";

const StoreItem = ({title, img, price, newItem, myUkrainianArray, id}) => {

    return (
        <div className="store-item__cart">
            <NavLink to={`/product/${id}`}>
                <div className="cart__container">
                    {newItem 
                    ? <p className="cart__new">New</p>
                    : <p className="cart__new--fake">New</p>
                    }
                    <h4 className="cart__title">{title}</h4>
                    <img src={img} alt={title} />
                    <p className="cart__price">
                        <img src={usa} alt="usd" />
                        {price} $
                    </p>
                    <p className="cart__price">
                        <img src={ukraine} alt="usd" />
                        {myUkrainianArray[id]} UAH
                    </p>
                </div> 
            </NavLink>
    </div>
    );
}

export default StoreItem;