import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Axios from "axios";
import '../css/EditProduct.css';


function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState('');

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/product/${id}`).then((data) => {
      setProduct(data.data);
    });
  });
  return (
    <div>
        <section className="body">
        <div className="product-page">
            <div className="product_info">
              <h1>{product.title}</h1>
              <h2>R$ {product.price}</h2>
              <h3>Estoque: {product.stock}</h3>
              <p>{product.description}</p>
            </div>
            <div className="edit_side">
            <form action="POST">
                <label htmlFor="title_field">Novo Título</label>
                <input type="text" id="title_field" className="form_field" />
                <label htmlFor="price_field">Novo Preço</label>
                <input type="text" id="price_field" className="form_field" />
                <label htmlFor="stock_field">Novo Estoque</label>
                <input type="text" id="stock_field" className="form_field" />
                <label htmlFor="stock_field">Nova Descrição</label>
                <input type="text" id="description_field" className="form_field" />
                <label htmlFor="img_link_field">Link para nova imagem</label>
                <input type="text" id="img_link_field" className="form_field" />
                <input type="submit" defaultValue="Alterar" id="submit_button" />
            </form>
            </div>
        </div>
        </section>
    </div>
  );
}

export default EditProduct;
