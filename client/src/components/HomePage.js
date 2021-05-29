import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../css/HomePage.css';
import DeletePopup from './DeletePopup';


function HomePage () {
  const [productList, setProductList] = useState([]);
  const [popupTrigger, setPopupTrigger] = useState('');
  const [productDeleteId, setProductDeleteId] = useState('');

  let history = useHistory();

  useEffect(() => {
    Axios.get("http://localhost:3001/api/product/get-all").then((data) => {
      setProductList(data.data);
    }, []);
  });

  return (
      <section className="body">
        <div className="products-list">
          <ol className="products-grid">
            <li>
              <div className="add_product_container">
                <a href="/create/product"><div id="add_product" /></a>
                <h2>Adicionar Produto</h2>
              </div>
            </li>
            {
              productList.map((val, key) => {
                const imgLink = val.imgLink ? val.imgLink : "no_image.png";
                if (!val.imgLink) {
                }
                return (
                  <li key={key}>
                    <div className="product-item">
                      <div className="product-title">
                        <p>{val.title}</p>
                      </div>
                      <div className="product-image">
                        <img src={imgLink} alt="Product" />
                      </div>
                      <div className="product-info">
                        <p>R$ {val.price}</p>
                        <input id="edit_button" type="button" onClick={()=> { history.push(`/edit/product/${val.id}`)}} />
                        <input id="delete_button" type="button" onClick={() => {
                          setProductDeleteId(val.id);
                          setPopupTrigger(true);
                        }} />
                        <input id="visualize_button" type="button" onClick={()=> { history.push(`/view/product/${val.id}`)}} />
                      </div>
                    </div>
                  </li>  
                );
              })
            }
          </ol>
          <DeletePopup trigger={popupTrigger}
              setTrigger={setPopupTrigger}
              productToDeleteId={productDeleteId}>
            <h2>Are you sure?</h2>
            <p>Once you confirm the operation, you cannot reverse it.</p>
          </DeletePopup>
        </div>
      </section>
  );
}

export default HomePage;