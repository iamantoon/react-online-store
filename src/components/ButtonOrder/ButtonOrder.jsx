import './style.css';

const ButtonOrder = (props) => {
    return (
        <div className="button-container">
            <button {...props} className="button">
                Make an order
            </button>
        </div>
        
    );
}

export default ButtonOrder;