import {useDispatch} from 'react-redux';
import {changeValueByInput, increaseCount, decreaseCount} from './../../store/storeSlice';

import up from './../../images/icons/up.svg';
import down from './../../images/icons/down.svg';

const Count = ({count, id}) => {
    const dispatch = useDispatch();

    return (
        <div className="count">
            <div className="count__box">
                <input value={count} onChange={(e) => dispatch(changeValueByInput({id: id, value: +e.target.value}))} className="count__input" type="number" min="1" max="100" />
            </div>
            <div className="count__controls">
                <button className="product-controls" onClick={() => dispatch(increaseCount({id}))}>
                    <img src={up} alt="increase" />
                </button>
                <button className="product-controls" onClick={() => dispatch(decreaseCount({id}))}>
                    <img src={down} alt="decrease" />
                </button>
            </div>
        </div>
    );
}

export default Count;