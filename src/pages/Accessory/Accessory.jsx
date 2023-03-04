import {useState} from "react";
import {useParams} from "react-router-dom";
import MyModal from "./../../components/UI/modal/MyModal";
import MyInput from "./../../components/UI/input/MyInput";

import allProducts from './../../helpers/allProducts';
import "./../Product/style.css";
import usa from "./../../images/icons/unitedstates.svg";
import ukraine from "./../../images/icons/ukraine.svg";
import mastercard from "./../../images/icons/payment-icons/Mastercard.svg";
import visa from "./../../images/icons/payment-icons/Visa.svg";
import applepay from "./../../images/icons/payment-icons/ApplePay.svg";
import googlepay from "./../../images/icons/payment-icons/GooglePay.svg";
import paypal from "./../../images/icons/payment-icons/PayPal.svg";
import amazonpay from "./../../images/icons/payment-icons/AmazonPay.svg";

const Accessory = ({addProductToCart, myUkrainianArray}) => {

    const {id} = useParams();
    const accessory = allProducts[id];

    const [modal, setModal] = useState(false);
    
    const textColor = {
        color: accessory.color
    };

    return (
        <section className="product-section">
            <div className="container">
                <div className="product-section__container">
                    <div className="product-section__img">
                        <img src={accessory.img} alt={accessory.title} />
                    </div>
                    <div className="product-section__description">
                        <h2 className="product-section__title">{accessory.title}</h2>
                        <h3 className="product-section__price">
                            <img src={usa} alt="usd" /> 
                            {accessory.price} $
                        </h3>
                        <h3 className="product-section__price">
                            <img src={ukraine} alt="uah" /> 
                            {myUkrainianArray[id]} UAH
                        </h3>
                        <p style={textColor} className="product-section__details">{accessory.description}</p>
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
                                        <img src={mastercard} alt="mastercard" />
                                    </button>
                                    <button className="payment-btn">
                                        <img src={visa} alt="visa" />
                                    </button>
                                    <button className="payment-btn">
                                        <img src={applepay} alt="applepay" />
                                    </button>
                                    <button className="payment-btn">
                                        <img src={googlepay} alt="googlepay" />
                                    </button>
                                    <button className="payment-btn">
                                        <img src={paypal} alt="paypal" />
                                    </button>
                                    <button className="payment-btn">
                                        <img src={amazonpay} alt="amazonpay" />
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

export default Accessory;