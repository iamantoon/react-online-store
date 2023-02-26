import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import Loader from './../../components/UI/loader/Loader';
import {useFetching} from './../../hooks/useFetching';
import VacancyService from '../../API/VacancyService';

import Comments from './../../components/Comments/Comments';

import './style.css';
import newsList from './../../helpers/newsList';

const NewsPage = () => {

    const {id} = useParams();
    const news = newsList[id];

    const [comments, setComments] = useState([]);

    const [fetchComments, isCommentsLoading, commentError] = useFetching( async () => {
        const response = await VacancyService.getCommentsByPostId(news.id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchComments();
    }, []);

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
                <h2 className="comments">Comments</h2>
                {commentError && 
                    <h1>A loading error has happened</h1>
                }
                {isCommentsLoading 
                    ? <div style={{display: 'flex', justifyContent: 'center', marginBottom: 15}}><Loader /></div>
                    : comments.map((comment) => 
                        <Comments key={comment.id} name={comment.name} body={comment.body} />
                    )
                }
            </div>
        </section>
    );
}

export default NewsPage;