import React, {useEffect, useState} from 'react';
import {getProductsService} from "../services/product";
import {Card} from "../components/Card";

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


    }, []);


    return (
        <section id='home'>
            <div className='home-container'>
                <h1>Gallery</h1>
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
