import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import priceFormatter from './../../utils/priceFormatter';

const CartFooter = () => {
    const products = useSelector(state => state.products.products);

    const productsInCart = products.filter(checkCart);

    function checkCart(value) {
        return value.cart;
    }

    const [total, setTotal] = useState({
        count: productsInCart.reduce((previous, current) => previous + current.count, 0),
        price: productsInCart.reduce((previous, current) => previous + current.totalPrice, 0)
    });

    useEffect(() => {
        setTotal({
            count: productsInCart.reduce((previous, current) => previous + current.count, 0),
            price: productsInCart.reduce((previous, current) => previous + current.totalPrice, 0)
        })
    }, [products]);

    return (
        <div className="cart-footer">
            <h1 className="cart-footer__count">{total.count} item(s)</h1>
            <h1 className="cart-footer__price">{priceFormatter.format(total.price)} $</h1>
        </div>
    );
}

export default CartFooter;