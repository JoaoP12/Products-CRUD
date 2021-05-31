import React, { useState } from "react";
import Axios from "axios";
import '../css/CreateProduct.css';


function CreateProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [imgLink, setLink] = useState("");

  const submitProduct = () => {
    Axios.post("http://localhost:3001/api/product/create", {
      title: title,
      price: price,
      stock: stock,
      description: description,
      imgLink: imgLink
    });
  };

  return (
    <div>   
      <section className="body">
        <div className="create-page">
          <h2>Create Product</h2>
          <form>
            <label htmlFor="title_field">Title</label>
            <input type="text" id="title_field" className="form-field" onChange={(e)=>{setTitle(e.target.value);}} />
            <label htmlFor="price_field">Price</label>
            <input type="text" id="price_field" className="form-field" onChange={(e)=>{setPrice(e.target.value);}} />
            <label htmlFor="stock_field">Stock</label>
            <input type="text" id="stock_field" className="form-field" onChange={(e)=>{setStock(e.target.value);}} />
            <label htmlFor="stock_field">New Description</label>
            <input type="text" id="description_field" className="form-field" onChange={(e)=>{setDescription(e.target.value);}} />
            <label htmlFor="img_link_field">Link to the product's picture</label>
            <input type="text" id="img_link_field" className="form-field" onChange={(e)=>{setLink(e.target.value);}} />
            <input type="submit" defaultValue="Create" id="submit_button" onClick={submitProduct} />
          </form>
        </div>
      </section>
    </div>
  );
}

export default CreateProduct;