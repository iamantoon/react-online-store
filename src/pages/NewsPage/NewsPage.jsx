import {useParams} from 'react-router-dom';

import './style.css';
import newsList from './../../helpers/newsList';

const NewsPage = () => {

    const {id} = useParams();
    const news = newsList[id];

    return (
        <section className="section">
            <div className="container">
                <div className="section-news">
                    <h2 className="section-news__title">{news.title}</h2>
                    <div className="section-news__img">
                        <img src={news.img} alt="Product" />
                        <img src={news.img2} alt="Product" />
                        <img src={news.img3} alt="Product" />
                    </div>
                    
                    <p className="section-news__description">{news.description}</p>
                    <p className="section-news__details">{news.details}</p>
                    <p className="section-news__date">{news.date}</p>
                </div>
            </div>
        </section>
    );
}

export default NewsPage;