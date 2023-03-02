import {useParams} from "react-router-dom";

import Accessory from "./../../components/Accessory/Accessory";
import store from "./../../helpers/store";
import accessories from "../../helpers/accessories";

import "./main.css";

const Accessories = () => {

    const {name} = useParams();

    const indexes = [4, 5, 6];
    let current;

    // for (let i = 0; i < indexes.length; i++) {
    //     if (store[i].title === name) {
    //         current = store[i];
    //         console.log(store[i]);
    //     }
    // }

    indexes.forEach((index) => {
        if (store[index].title === name) {
            current = store[index];
        }
        return 0;
    });

    return (
        <div className="container">
            <h1 className="accessories-title">{current.title2}</h1>
            <section className="section-one">
                <header className="header">
                    <h2 className="header__title">Upgrade your Apple devices with our premium accessories, carefully selected to enhance your productivity, protect your devices, and create a comfortable workspace.</h2>
                    <img src={current.img} alt={current.title2} />     
                </header>
                <p className="description">{current.text1}</p>
                <ul className="store-item__products">
                    {accessories.map((accessory) => {
                        if (accessory.id < current.main && accessory.id > current.bottom) {
                            return <Accessory key={accessory.id} title={accessory.title} img={accessory.img} price={accessory.price} id={accessory.id} />
                        }
                    })}
                </ul> 
                <p className="description">{current.text2}</p>
            </section>
            <section className="section-two">
                <h1 className="title-2">{current.title3}</h1>
                <p className="description">{current.text3}</p>
                <ul className="store-item__products">
                    {accessories.map((accessory) => {
                        if (accessory.id >= current.main && accessory.id < current.top) {
                            return <Accessory key={accessory.id} title={accessory.title} img={accessory.img} price={accessory.price} id={accessory.id} />
                        }
                    })}
                </ul>
                <p className="description" style={{textAlign: 'center'}}>{current.text4}</p>
            </section>
        </div>
    );
}

export default Accessories;