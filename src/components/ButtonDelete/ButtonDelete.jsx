import deleteBtn from './../../images/icons/delete.svg';

const ButtonDelete = ({deleteFunction, id}) => {
    return (
        <button onClick={() => deleteFunction(id)}>
            <img src={deleteBtn} alt="delete" />
        </button>
    );
}

export default ButtonDelete;