import {useState} from 'react';
import {NavLink} from 'react-router-dom';

import './style.css';

import open from './../../images/icons/open.svg';
import close from './../../images/icons/close.svg';
import cart from './../../images/icons/cart.svg';

const Nav = ({total}) => {
    
    const [openButton, setOpenButton] = useState(false);

    const openNav = () => {
        setOpenButton(true);
    }

    const closeNav = () => {
        setOpenButton(false);
    }

    return (
        <nav className="nav">
            <div className="nav-container">
                <nav className={openButton ? "nav-nav open" : "nav-nav"}>
                    <div className="nav-logo">
                        <h1 className="nav-logo__title">Apple</h1>
                    </div>
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className="nav-list__link" onClick={closeNav}>Home</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/about" className="nav-list__link" onClick={closeNav}>About</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/cart" className="nav-list__link" onClick={closeNav}>Cart</NavLink>
                        </li>
                    </ul>
                    <div className="nav-items">
                        <img onClick={openNav} src={open} alt="open" className="open-button" />
                        <img src={close} alt="close" className={openButton ? 'close-button' : 'close-button none'} onClick={closeNav}/>  
                        <div className="nav-items__cart">
                            <NavLink to="/cart">
                                <img src={cart} alt="cart" />
                                <p className="nav-items__cart-title">{total}</p>
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </nav>
    );
}

export default Nav;