import {useParams} from "react-router-dom";
import StoreItem from "../../components/StoreItem/StoreItem";
import store from "../../helpers/store";
import "./main.css";

const Store = ({items, myUkrainianArray}) => {

    const {name} = useParams();

    const indexes = [0, 1, 2, 3];
    let current;

    indexes.forEach((id) => {
        if (store[id].title === name) {
            current = store[id];
        }
        return 0;
    });

    return (
        <div className="store-container">
            <div className="container">
                <section className="store-item">
                    <h1 className="store-item__title">Shop {current.title2}</h1>
                    <p className="store-item__text">{current.text1}</p>
                    <h3 className="store-item__header">All models. <span>Take your pick.</span></h3>
                    <ul className="store-item__products">
                        {items.map((item) => {
                            if (item.title.includes(current.title2)){
                                return <StoreItem
                                            id={item.id} 
                                            key={item.id}
                                            title={item.title} 
                                            img={item.img} 
                                            price={item.price} 
                                            newItem={item.newItem}
                                            myUkrainianArray={myUkrainianArray}
                                        />
                            }
                        })}
                    </ul>
                    <p className="store-item__text">{current.text2}</p>
                    <p className="store-item__text">{current.text3}</p>
                </section>
            </div>
        </div>
    );
}

export default Store;