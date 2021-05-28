import React, { useState, useEffect } from "react";
import Axios from "axios";
import '../css/Product.css';


function Product (){
    return (
        <div>
            <section className="body">
                <div className="product-page">
                    <div className="image-side">
                    <div className="product-image">
                        <img src="https://artwalk.vteximg.com.br/arquivos/ids/214562-1000-1000/Tenis-Nike-Air-Max-27-React-Masculino-Multicolor.jpg?v=636991333036070000" alt="" />
                    </div>
                    </div>
                    <div className="info-side">
                        <h1>Tênis da Nike</h1>
                        <h2>R$300,00</h2>
                        <h3>Estoque: <span id="item_stock">10</span></h3>
                        <p>Esse tênis é realmente muito bom, você consegue andar com ele e ela vai junto.
                            Se você quer comprar um tênis de qualidade, compra esse aqui.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Product;