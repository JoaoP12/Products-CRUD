import React, { useState, useEffect } from "react";
import { useParams} from 'react-router-dom';
import Axios from "axios";
import '../css/EditProduct.css';


function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [imgLink, setImgLink] = useState('');

  const updateProduct = () => {
    Axios.put(`http://localhost:3001/api/product/${id}`, {
      title: title || product.title,
      description: description || product.description,
      price: price || product.price,
      stock: stock || product.stock,
      imgLink: imgLink || product.imgLink
    }).then((res, err)=> {
      err ? console.log(err.message) : console.log("Alterado!");
    });
  };

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/product/${id}`).then((data) => {
      setProduct(data.data);
    });
  });
  return (
    <div>
        <section className="body">
        <div className="product-page">
            <div className="product-info">
              <h1>{product.title}</h1>
              <h2>R$ {product.price}</h2>
              <h3>Stock: {product.stock}</h3>
              <p>{product.description}</p>
            </div>
            <div className="edit-side">
            <form>
                <label htmlFor="title_field">New Title</label>
                <input type="text" id="title_field" className="form-field" onChange={(e)=>setTitle(e.target.value)} />
                <label htmlFor="price_field">New Price</label>
                <input type="text" id="price_field" className="form-field" onChange={(e)=>setPrice(e.target.value)} />
                <label htmlFor="stock_field">New Stock</label>
                <input type="text" id="stock_field" className="form-field" onChange={(e)=>setStock(e.target.value)} />
                <label htmlFor="stock_field">New Description</label>
                <input type="text" id="description_field" className="form-field" onChange={(e)=>setDescription(e.target.value)} />
                <label htmlFor="img_link_field">Link to the new picture</label>
                <input type="text" id="img_link_field" className="form-field" onChange={(e)=>setImgLink(e.target.value)} />
                <input type="submit" defaultValue="Alterar" id="submit_button" onClick={()=> {
                  updateProduct();
                }} />
            </form>
            </div>
        </div>
        </section>
    </div>
  );
}

export default EditProduct;
