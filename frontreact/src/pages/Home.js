import React, {useEffect, useState} from 'react';
import {getProductsService} from "../services/product";
import {Card} from "../components/Card";
import {FormattedMessage} from "react-intl";

export const Home = ({searchKey}) => {
    const [products, setProducts] = useState([]);

    React.useEffect(() => {


        if (!navigator.onLine) {
            if (localStorage.getItem("products") !== null) {
                setProducts(JSON.parse(localStorage.getItem("products")));
            }
        } else {

            console.log(searchKey);
            getProductsService(searchKey).then(ans => {

                setProducts(ans);
                console.log(products, products.length);
            });

        }

        console.log(products, products.length);


    }, [searchKey]);


    return (
        <section id='home'>
            <div className='home-container'>
                <h1> <FormattedMessage id="gallery"/></h1>
                <div className='home-card'>
                    {products.map((p, index) => {
                        return (
                            <Card key={index} name={p.name} picture={p.picture} price={p.price} isActive={p.isActive}/>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
