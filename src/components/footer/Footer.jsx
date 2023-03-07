import {NavLink} from 'react-router-dom';
import './style.css';

import facebook from './../../images/socials/facebook-light.svg';
import instagram from './../../images/socials/instagram-light.svg';
import tiktok from './../../images/socials/tiktok-light.svg';
import twitter from './../../images/socials/twitter-light.svg';

import facebookOriginal from './../../images/socials/facebook-original.svg';
import instagramOriginal from './../../images/socials/instagram-original.svg';
import tiktokOriginal from './../../images/socials/tiktok-original.svg';
import twitterOriginal from './../../images/socials/twitter-original.svg';

const Footer = () => {

    const changeIcon = (e) => {
        switch (e.target.getAttribute('src')) {
            case facebook:
                e.target.setAttribute('src', facebookOriginal);
                break;
            case instagram:
                e.target.setAttribute('src', instagramOriginal);
                break;
            case tiktok:
                e.target.setAttribute('src', tiktokOriginal);
                break;
            case twitter:
                e.target.setAttribute('src', twitterOriginal);
        }
    }

    const changeToDefaultIcons = (e) => {
        switch (e.target.getAttribute('src')) {
            case facebookOriginal:
                e.target.setAttribute('src', facebook);
                break;
            case instagramOriginal:
                e.target.setAttribute('src', instagram);
                break;
            case tiktokOriginal:
                e.target.setAttribute('src', tiktok);
                break;
            case twitterOriginal:
                e.target.setAttribute('src', twitter);
        }
    }

    return (
        <footer className="footer">
            <div className="nav-container">
                <ul className="footer-items">
                    <li className="footer-items__item">
                        <NavLink to="/career" className="footer-items__link">Careers</NavLink>
                    </li>
                    <li className="footer-items__item">
                        <NavLink to="/contacts" className="footer-items__link">Contact us</NavLink>
                    </li>
                    <li className="footer-items__item">
                        <NavLink to="/question" className="footer-items__link">Feedback</NavLink>
                    </li>
                    <li className="footer-items__item">
                        <NavLink to="/privacy" className="footer-items__link">Privacy</NavLink>
                    </li>
                </ul>
                <ul className="footer-socials">
                    <li><a href="https://www.instagram.com/" target="_blank"><img onMouseOver={changeIcon} onMouseOut={changeToDefaultIcons} src={instagram} alt="Instagram"/></a></li>
                    <li><a href="https://www.facebook.com/" target="_blank"><img onMouseOver={changeIcon} onMouseOut={changeToDefaultIcons} src={facebook} alt="Facebook"/></a></li>
                    <li><a href="https://www.tiktok.com/" target="_blank"><img onMouseOver={changeIcon} onMouseOut={changeToDefaultIcons} src={tiktok} alt="TikTok"/></a></li>
                    <li><a href="https://twitter.com/" target="_blank"><img onMouseOver={changeIcon} onMouseOut={changeToDefaultIcons} src={twitter} alt="Twitter"/></a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;