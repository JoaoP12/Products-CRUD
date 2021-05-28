import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Axios from "axios";
import '../css/Product.css';


function Product (){
    const [product, setProduct] = useState('');
    const { id } = useParams();

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/product/${id}`).then((data) => {
            setProduct(data.data);
        }, []);
    });

    return (
        <div>
            <section className="body">
                <div className="product-page">
                    <div className="image-side">
                    <div className="product-image">
                        <img src={product.imgLink} alt="" />
                    </div>
                    </div>
                    <div className="info-side">
                        <h1>{product.title}</h1>
                        <h2>R$ {product.price}</h2>
                        <h3>Estoque: {product.stock}</h3>
                        <p>{product.description}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Product;