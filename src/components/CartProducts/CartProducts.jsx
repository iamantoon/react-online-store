import {useDispatch} from 'react-redux';

import Count from './../Count/Count';
import ButtonDelete from './../ButtonDelete/ButtonDelete';

import priceFormatter from './../../utils/priceFormatter';

const CartProducts = ({id, img, count, title, totalPrice, increaseFunction, decreaseFunction, changeValue}) => {

    return (
        <section className="product">
            <div className="product__image">
                <img src={img} alt={title} />
            </div>
            <div className="product__title">{title}</div>
            <div className="product__count">
                <Count count={count} id={id} increaseFunction={() => increaseFunction(id, 'count')} decreaseFunction={() => decreaseFunction(id, 'count')} changeValue={changeValue} />
            </div>
            <div className="product__price">{priceFormatter.format(totalPrice)} $</div>
            <div className="product__controls">
                <ButtonDelete id={id} />
            </div>
        </section>
    );
}

export default CartProducts;