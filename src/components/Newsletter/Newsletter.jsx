import './style.css';

const Newsletter = () => {
    return (
        <div className="newsletter">
            <div className="container">
                <div className="newsletter-container">
                    <div className="newsletter__text">
                        <h3>Newsletter</h3>
                        <p>To subscribe to our newsletter, we kindly request your email address. Your email address will be kept confidential and will only be used to send you our newsletter and other relevant updates. We take your privacy seriously and will not share your information with any third parties. </p>
                    </div>
                    <div className="newsletter__email">
                        <input className="newsletter__input" placeholder="Type your email address" />
                        <button className="newsletter__button">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;