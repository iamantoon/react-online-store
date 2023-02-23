import './style.css';

const Services = ({img, title, description}) => {
    return (
        <li className="services-item">
            <img src={img} alt={title} />
            <h4 className="services-item__title">{title}</h4>
            <p className="services-item__text">{description}</p>
        </li>
    );
}

export default Services;