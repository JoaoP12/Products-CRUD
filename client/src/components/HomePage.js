import React, { useState, useEffect, useMemo } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../css/HomePage.css';
import DeletePopup from './DeletePopup';
import stringSimilarity from 'string-similarity';

function filterProducts (queryString, productList) {
  if (queryString.trim() === ""){
    return productList;
  }
  const queryProducts = productList.filter((p)=> {
    const similarity = stringSimilarity.compareTwoStrings(p.title, queryString);
    console.log(similarity);
    return similarity >= 0.5;
  });
  return queryProducts;
}

function HomePage () {
  const [productList, setProductList] = useState([]);
  const [popupTrigger, setPopupTrigger] = useState('');
  const [productDeleteId, setProductDeleteId] = useState('');
  const [queryString, setQueryString] = useState('');
  let history = useHistory();
  

  useEffect(() => {
    Axios.get("http://localhost:3001/api/product/get-all").then((data) => {
      setProductList(data.data);
    });
  });

  const queryProducts = useMemo(()=> filterProducts(queryString, productList), [queryString, productList]);

  return (
      <section className="body">
        <div className="main-body">
          <div id="search-bar">
            <input type="text" placeholder="Search" onChange={ (e)=> setQueryString(e.target.value) } />
          </div>
          <div className="products-list">
            <ol className="products-grid">
              <li>
                <div className="add-product-container">
                  <a href="/create/product"><div id="add-product" /></a>
                  <h2>Add product</h2>
                </div>
              </li>
              {
                queryProducts.map((val, key) => {
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
                          <input id="edit-button" type="button" onClick={()=> { history.push(`/edit/product/${val.id}`)}} />
                          <input id="delete-button" type="button" onClick={() => {
                            setProductDeleteId(val.id);
                            setPopupTrigger(true);
                          }} />
                          <input id="view-button" type="button" onClick={()=> { history.push(`/view/product/${val.id}`)}} />
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
        </div>
      </section>
  );
}

export default HomePage;