import up from './../../images/icons/up.svg';
import down from './../../images/icons/down.svg';

const Count = ({count, id, increaseFunction, decreaseFunction, changeValue}) => {
    return (
        <div className="count">
            <div className="count__box">
                <input value={count} onChange={(e) => changeValue(id, +e.target.value)} className="count__input" type="number" min="1" max="100" />
            </div>
            <div className="count__controls">
                <button className="product-controls" onClick={() => increaseFunction(id)}>
                    <img src={up} alt="increase" />
                </button>
                <button className="product-controls" onClick={() => decreaseFunction(id)}>
                    <img src={down} alt="decrease" />
                </button>
            </div>
        </div>
    );
}

export default Count;