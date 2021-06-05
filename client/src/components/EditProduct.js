import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Axios from "axios";
import "../css/EditProduct.css";
import { editProductSchema } from "../schemas/productValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function EditProduct() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(editProductSchema)
  });

  const history = useHistory();

  const { id } = useParams();
  const [product, setProduct] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [imgLink, setImgLink] = useState('');

  const submitUpdate = () => {
    Axios.put(`http://localhost:3001/api/product/${id}`, {
      title: title || product.title,
      description: description || product.description,
      price: price || product.price,
      stock: stock || product.stock,
      imgLink: imgLink || product.imgLink
    }).then(res => { history.push("/"); })
    
  }

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/product/${id}`).then((data) => {
      setProduct(data.data);
    });
  });

  return (
    <div>
        <section className="body">
        <div className="product-page">
            <div className="product-information">
              <h1>{product.title}</h1>
              <h2>R$ {product.price}</h2>
              <h3>Stock: {product.stock}</h3>
              <p>{product.description}</p>
            </div>
            <div className="edit-side">
            <form onSubmit={handleSubmit(submitUpdate)}>
                <label htmlFor="title_field">New Title</label>
                <input type="text" id="title_field" {...register("title")} className="form-field" onChange={(e)=>setTitle(e.target.value)} />
                <span>{errors.title?.message}</span> <br />

                <label htmlFor="price_field">New Price</label>
                <input type="text" id="price_field" {...register("price")} className="form-field" onChange={(e)=>setPrice(e.target.value)} />
                <span>{errors.price?.message}</span> <br />

                <label htmlFor="stock_field">New Stock</label>
                <input type="text" id="stock_field" {...register("stock")} className="form-field" onChange={(e)=>setStock(e.target.value)} />
                <span>{errors.stock?.message && "Stock must be a valid positive integer"}</span> <br />

                <label htmlFor="stock_field">New Description</label>
                <input type="text" id="description_field" {...register("description")} className="form-field" onChange={(e)=>setDescription(e.target.value)} />
                <span>{errors.description?.message}</span> <br />

                <label htmlFor="img_link_field">Link to the new picture</label>
                <input type="text" id="img_link_field" {...register("imgLink")}className="form-field" onChange={(e)=>setImgLink(e.target.value)} />
                <span>{errors.imgLink?.message}</span> <br />

                <input type="submit" defaultValue="Alterar" id="submit_button" />
            </form>
            </div>
        </div>
        </section>
    </div>
  );
}

export default EditProduct;
