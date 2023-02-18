import priceFormatter from './../../utils/priceFormatter';

const CartFooter = ({count, price}) => {
    return (
        <div className="cart-footer">
            <h1 className="cart-footer__count">{count} item(s)</h1>
            <h1 className="cart-footer__price">{priceFormatter.format(price)} $</h1>
        </div>
    );
}

export default CartFooter;