import React, { useState, useEffect } from 'react';
import {Chart} from "../components/Chart";
import {getProductsService} from "../services/product";

export const Report = ({searchKey}) => {
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
    <section id='report'>
      <div className='report-container'>
        <h1>Unidades en inventario</h1>

          <Chart data = {products} s={ searchKey} />

      </div>
    </section>
  );
};
