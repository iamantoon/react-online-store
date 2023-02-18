import {useState} from 'react';
import {useParams} from 'react-router-dom';
import MyModal from './../../components/UI/modal/MyModal';
import MyInput from './../../components/UI/input/MyInput';

import mastercard from './../../images/icons/payment-icons/Mastercard.svg';
import visa from './../../images/icons/payment-icons/Visa.svg';
import applepay from './../../images/icons/payment-icons/ApplePay.svg';
import googlepay from './../../images/icons/payment-icons/GooglePay.svg';
import paypal from './../../images/icons/payment-icons/PayPal.svg';
import amazonpay from './../../images/icons/payment-icons/AmazonPay.svg';

import './style.css';

import allProducts from './../../helpers/allProducts';

const Product = ({addProductToCart}) => {

    let {id} = useParams();
    const product = allProducts[id];

    const [modal, setModal] = useState(false);
    
    console.log(product.color);
    const textColor = {
        color: product.color
    };
    console.log(textColor);

    return (
        <section className="product-section">
            <div className="container">
                <div className="product-section__container">
                    <div className="product-section__img">
                        <img src={product.img} alt={product.title} />
                    </div>
                    <div className="product-section__description">
                        <h2 className="product-section__title">{product.title}</h2>
                        <h3 className="product-section__price">{product.price} $</h3>
                        <p style={textColor} className="product-section__details">{product.description}</p>
                        <div className="product-section__button">
                            <button onClick={() => addProductToCart(id)} className="add-to-cart-button">Add to cart</button>
                            <button onClick={() => setModal(true)} className="buy-button">Buy</button>
                        </div>
                        <MyModal visible={modal} setVisible={setModal}>
                            <div className="modal-content">
                                <h3 className="modal-content__title">Fill the form to make an order</h3>
                                <div className="modal-content__input">
                                    <MyInput type="text" placeholder="Your firstname"></MyInput>
                                    <MyInput type="text" placeholder="Your lastname"></MyInput>
                                    <MyInput type="text" placeholder="Your email"></MyInput>
                                    <MyInput type="text" placeholder="Your number"></MyInput>
                                </div>
                                <h3 className="modal-content__title">Pick payment</h3>
                                <div className="modal-content__payment">
                                    <button className="payment-btn">
                                        <img src={mastercard} />
                                    </button>
                                    <button className="payment-btn">
                                        <img src={visa} />
                                    </button>
                                    <button className="payment-btn">
                                        <img src={applepay} />
                                    </button>
                                    <button className="payment-btn">
                                        <img src={googlepay} />
                                    </button>
                                    <button className="payment-btn">
                                        <img src={paypal} />
                                    </button>
                                    <button className="payment-btn">
                                        <img src={amazonpay} />
                                    </button>
                                </div>
                            </div>
                        </MyModal>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Product;