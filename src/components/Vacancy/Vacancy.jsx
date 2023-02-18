import './style.css';

const Vacancy = ({id, title, description}) => {
    return (
        <div className="vacancy">
            <h2 className="vacancy__title">{id}. {title}</h2>
            <p className="vacancy__description">{description}</p>
        </div>
    );
}

export default Vacancy;