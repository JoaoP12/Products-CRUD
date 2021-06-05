import React, { useState } from "react";
import Axios from "axios";
import '../css/CreateProduct.css';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createProductSchema } from '../schemas/productValidationSchema';
import { useHistory } from "react-router-dom";


function CreateProduct() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(createProductSchema),
  });

  const history = useHistory();

  const submitProduct = (data) => {
    Axios.post("http://localhost:3001/api/product/create", {
      title,
      price,
      stock,
      description,
      imgLink
    }).then(res => { history.push("/"); });
  }

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [imgLink, setLink] = useState("");

  return (
    <div>   
      <section className="body">
        <div className="create-page">
          <h2>Create Product</h2>
          <form onSubmit={handleSubmit(submitProduct)}>
            <label>Title</label>
            <input type="text" id="titlef" className="form-field" {...register('title')} onChange={(e)=>{setTitle(e.target.value);}} />
            <span>{errors.title?.message}</span> <br />
            
            <label>Price</label>
            <input type="text" className="form-field" {...register('price')} onChange={(e)=>{setPrice(e.target.value);}} />
            <span>{errors.price?.message && "Price must be a positive float or integer"}</span> <br />

            <label>Stock</label>
            <input type="text" className="form-field" {...register('stock')} onChange={(e)=>{setStock(e.target.value);}} />
            <span>{errors.stock?.message && "Stock is required and  must be a positive non-decimal number"}</span> <br />

            <label>New Description</label>
            <input type="text" className="form-field" {...register('description')} onChange={(e)=>{setDescription(e.target.value);}} />
            <span>{errors.description?.message}</span> <br />

            <label>Link to the product's picture</label>
            <input type="text" id="link" className="form-field" {...register('imgLink')} onChange={(e)=>{setLink(e.target.value);}} />
            <span>{errors.imgLink?.message}</span> <br />

            <input type="submit" defaultValue="Create" id="submit_button" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default CreateProduct;