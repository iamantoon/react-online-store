import {useState, useEffect} from 'react';

import Title from './../Title/Title';
import CartHeader from './../CartHeader/CartHeader';
import CartProducts from './../CartProducts/CartProducts';
import CartFooter from './../CartFooter/CartFooter';
import ButtonOrder from './../ButtonOrder/ButtonOrder';
import MyModal from './../UI/modal/MyModal';
import MyInput from './../UI/input/MyInput';
import MySelect from './../UI/select/MySelect';

import mastercard from './../../images/icons/payment-icons/Mastercard.svg';
import visa from './../../images/icons/payment-icons/Visa.svg';
import applepay from './../../images/icons/payment-icons/ApplePay.svg';
import googlepay from './../../images/icons/payment-icons/GooglePay.svg';
import paypal from './../../images/icons/payment-icons/PayPal.svg';
import amazonpay from './../../images/icons/payment-icons/AmazonPay.svg';

const Cart = ({items, setItems}) => {  

    const [selectedSort, setSelectedSort] = useState('');

    const [total, setTotal] = useState({
        count: items.reduce((previous, current) => previous + current.count, 0),
        price: items.reduce((previous, current) => previous + current.totalPrice, 0)
    });

    useEffect(() => {
        setTotal({
            count: items.reduce((previous, current) => previous + current.count, 0),
            price: items.reduce((previous, current) => previous + current.totalPrice, 0)
        })
    }, [items])

    const deleteFunction = (id, cart) => {
        setItems(prevItems => {
            const updatedList = [...prevItems];
            const updatedElement = updatedList[id];
            updatedElement[cart] = false;
            return updatedList;
        });
    }

    const increaseFunction = (id, count) => {
        setItems(prevItems => {
            const updatedArray = [...prevItems];
            const updatedElement = updatedArray[id];
            updatedElement[count] = updatedElement[count] + 1;
            updatedElement.totalPrice = updatedElement[count] * updatedElement.price;
            return updatedArray;
        });
    }

    const decreaseFunction = (id, count) => {
        setItems(prevItems => {
            const updatedArray = [...prevItems];
            const updatedElement = updatedArray[id];
            if (updatedElement[count] < 2) {
                updatedElement.cart = false;
            } else {
                updatedElement.count = updatedElement[count] - 1;
                updatedElement.totalPrice = updatedElement[count] * updatedElement.price;
            }
            
            return updatedArray;
        });
    }

    // const increaseFunction = (id) => {
    //     setProductCartArray(products => {
    //         return products.map((product) => {
    //             if (product.id === id) {
    //                 return {
    //                     ...product,
    //                     count: product.count + 1,
    //                     totalPrice: (product.count + 1) * product.price
    //                 }
    //             }
    //             return product;
    //         });
    //     });
    // }

    // const decreaseFunction = (id) => {
    //     setProductCartArray(products => {
    //         return products.map((product) => {
    //             if (product.id === id) {
    //                 return {
    //                     ...product,
    //                     count: product.count - 1 > 1 ? product.count - 1 : 1,
    //                     totalPrice: (product.count - 1 > 1 ? product.count - 1 : 1) * product.price
    //                 }
    //             }
    //             return product;
    //         });
    //     });
    // }

    // const changeValue = (id, value) => {
    //     setProductCartArray(products => {
    //         return products.map((product) => {
    //             if (product.id === id) {
    //                 return {
    //                     ...product,
    //                     count: value,
    //                     totalPrice: value * product.price
    //                 }
    //             }
    //             return product;
    //         });
    //     });
    // }

    const changeValue = (id, value) => {
        setItems(prevItems => {
            const updatedArray = [...prevItems];
            const updatedElement = updatedArray[id];
            if (value <= 0) {
                updatedElement.cart = false;
            } else {
                updatedElement.count = value;
                updatedElement.totalPrice = value * updatedElement.price;
            }
            return updatedArray;
        });
    }

    const sortProducts = (sort) => {
        setSelectedSort(sort);
        
        if (typeof items[0][sort] === 'string') {
            setItems([...items].sort((a, b) => a[sort].localeCompare(b[sort])));
        } else {
            setItems([...items].sort((a, b) => a[sort] - b[sort]));
        }
    }

    const [modal, setModal] = useState(false);

    /* Form validation */
    const [formValid, setFormValid] = useState(false);
    const [inputs, setInputs] = useState({firstname: '', lastname: '', email: '', phone: ''});

    const [firstNameDirty, setFirstNameDirty] = useState(false);
    const [lastNameDirty, setLastNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);

    const [firstNameError, setFirstNameError] = useState("This field can't be empty");
    const [lastNameError, setLastNameError] = useState("This field can't be empty");
    const [emailError, setEmailError] = useState("This field can't be empty");
    const [phoneError, setPhoneError] = useState("This field can't be empty");

    const blurHandler = (e) => {
        switch(e.target.name) {
            case "firstname":
                setFirstNameDirty(true);
                break;
            case "lastname":
                setLastNameDirty(true);
                break;
            case "email":
                setEmailDirty(true);
                break;
            case "phone":
                setPhoneDirty(true);
                break;
        }
    }

    const firstNameHandler = (e) => {
        setInputs({...inputs, firstname: e.target.value});
        if (Number.isInteger(Number(e.target.value))) {
            setFirstNameError("Your firstname must be a string");
        } else if (e.target.value.length < 2) {
            setFirstNameError("Your firstname must be longer than 1 letter");
        } else {
            setFirstNameError("");
        }
    }

    const lastNameHandler = (e) => {
        setInputs({...inputs, lastname: e.target.value});
        if (Number.isInteger(Number(e.target.value))) {
            setLastNameError("Your lastname must be a string");
        } else if (e.target.value.length < 2) {
            setLastNameError("Your lastname must be longer than 1 letter")
        }
    }

    const emailHandler = (e) => {
        setInputs({...inputs, email: e.target.value});
        const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("Invalid email");
        } else {
            setEmailError("");
        }
    }

    const phoneHandler = (e) => {
        setInputs({...inputs, phone: e.target.value});
        const re = /([0-9]+(-[0-9]+)+)/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setPhoneError("Invalid phone number");
        } else {
            setPhoneError("");
        }
    }

    useEffect(() => {
        if (firstNameError || lastNameError || emailError || phoneError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    });

    let counter = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i].cart) {
            counter += 1;
        }
    }

    return (
        <>
            <section className="section-cart">
                <header className="section-cart__header">
                    <div className="cart-container">
                        {counter !== 0 && <Title />}                    
                    </div>
                </header>
                <div className="cart-container">
                    {counter !== 0 && 
                    <MySelect value={selectedSort} onChange={sortProducts} options={[
                        {value: 'price', name: 'Sort by price'},
                        {value: 'totalPrice', name: 'Sort by total price'},
                        {value: 'title', name: 'Sort by name'},
                        {value: 'id', name: 'Sort by default'}
                    ]} defaultValue='Sort by' /> }
                </div>
                <div className="section-cart__body">
                    <div className="cart-container">
                        {counter !== 0 &&
                            <CartHeader />
                        }
                            {counter !== 0 ? 
                            items.map((product) => {
                                if (product.cart) {
                                    return <CartProducts
                                                key={product.id}   
                                                id={product.id} 
                                                img={product.img}
                                                title={product.title}
                                                count={product.count}
                                                totalPrice={product.totalPrice}

                                                deleteFunction={deleteFunction}
                                                increaseFunction={increaseFunction}
                                                decreaseFunction={decreaseFunction}
                                                changeValue={changeValue}
                                            />
                                }
                            }) : <h1 style={{color: 'rgb(187, 38, 73)', fontSize: 45, textAlign: 'center', margin: '25px 0', fontWeight: 600}}>Your cart is empty</h1>}

                        {counter !== 0 && <CartFooter count={total.count} price={total.price} />}

                        {counter !== 0 &&
                        <ButtonOrder onClick={() => setModal(true)} count={total.count} price={total.price} />
                        }

                        <MyModal visible={modal} setVisible={setModal}>
                            <div className="modal-content">
                                <h3 className="modal-content__title">Fill the form to make an order</h3>
                                <div className="modal-content__input">
                                    {(firstNameDirty && firstNameError) && <div className="error">{firstNameError}</div>}
                                    <MyInput
                                        value={inputs.firstname}
                                        onChange={(e) => firstNameHandler(e)}
                                        onBlur={(e) => blurHandler(e)}
                                        type="text"
                                        name="firstname" 
                                        placeholder="Your firstname"  
                                    />
                                    {(lastNameDirty && lastNameError) && <div className="error">{lastNameError}</div>}
                                    <MyInput 
                                        value={inputs.lastname}
                                        onChange={(e) => lastNameHandler(e)}
                                        onBlur={(e) => blurHandler(e)}
                                        type="text"
                                        name="lastname" 
                                        placeholder="Your lastname" 
                                    />
                                    {(emailDirty && emailError) && <div className="error">{emailError}</div>}
                                    <MyInput 
                                        value={inputs.email}
                                        onChange={(e) => emailHandler(e)}
                                        onBlur={(e) => blurHandler(e)}
                                        type="text" 
                                        name="email"
                                        placeholder="Your email" 
                                    />
                                    {(phoneDirty && phoneError) && <div className="error">{phoneError}</div>}
                                    <MyInput
                                        value={inputs.phone} 
                                        onChange={(e) => phoneHandler(e)}
                                        onBlur={(e) => blurHandler(e)}
                                        type="text"
                                        name="phone" 
                                        placeholder="Your number" 
                                    />
                                </div>
                                <h3 className="modal-content__title">Pick payment</h3>
                                <div className="modal-content__payment">
                                    <button disabled={!formValid} className="payment-btn">
                                        <img src={mastercard} />
                                    </button>
                                    <button disabled={!formValid} className="payment-btn">
                                        <img src={visa} />
                                    </button>
                                    <button disabled={!formValid} className="payment-btn">
                                        <img src={applepay} />
                                    </button>
                                    <button disabled={!formValid} className="payment-btn">
                                        <img src={googlepay} />
                                    </button>
                                    <button disabled={!formValid} className="payment-btn">
                                        <img src={paypal} />
                                    </button>
                                    <button disabled={!formValid} className="payment-btn">
                                        <img src={amazonpay} />
                                    </button>
                                </div>
                            </div>
                        </MyModal>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;