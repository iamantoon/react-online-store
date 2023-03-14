import {useDispatch} from 'react-redux';
import {deleteProduct} from './../../store/storeSlice';

import deleteBtn from './../../images/icons/delete.svg';

const ButtonDelete = ({id}) => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(deleteProduct({id}))}>
            <img src={deleteBtn} alt="delete" />
        </button>
    );
}

export default ButtonDelete;