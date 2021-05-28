import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from 'react-router-dom';
import '../css/CreateProduct.css';


function HomePage () {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/api/product/get-all").then((data) => {
      setProductList(data.data);
    }, []);
  });

  return (
      <section className="body">
        <div className="products-list">
          <ol className="products-grid">
            <li>
              <div className="add_product_container">
                <div className="add_product" />
                <h2>Adicionar Produto</h2>
              </div>
            </li>
            {
              productList.map((val, key) => {
                return (
                  <li>
                    <div className="product-item" key={key}>
                      <div className="product-title">
                        <p>{val.title}</p>
                      </div>
                      <div className="product-image">
                        <img src={() => {
                          if(val.imgLink){
                            return val.imgLink;
                          }
                          return "../src/img/no_image.png";
                        }} alt="Product" />
                      </div>
                      <div className="product-info">
                        <p>R$ {val.price}</p>
                        <input id="edit_button" type="button" />
                        <input id="delete_button" type="button" />
                        <input id="visualize_button" type="button" />
                      </div>
                    </div>
                  </li>  
                );
              })
            }
          </ol>
        </div>
      </section>
  );
}

export default HomePage;