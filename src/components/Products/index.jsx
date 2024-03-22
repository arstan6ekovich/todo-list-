import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const [img, setInputImg] = useState("");
  const [name, setINputName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const { products } = useSelector((s) => s);
  const getProducts = () => {
    let results = {
      id: products.length ? products[products.length - 1].id + 1 : 1,
      img,
      name,
      price,
      description,
    };
    dispatch({ type: "ADD_PRODUCTS", payload: results });
    console.log(results);
    let res = [...products, results];
    localStorage.setItem("product", JSON.stringify(res));
  };
  return (
    <div id="Products">
      <div className="container">
        <div className="Products">
          <input
            onChange={(e) => setInputImg(e.target.value)}
            type="text"
            placeholder="Product Img"
          />
          <input
            onChange={(e) => setINputName(e.target.value)}
            type="text"
            placeholder="Product Name"
          />
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Product Description"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="Product Price"
          />
          <button
            onClick={() => getProducts()}
            style={{
              padding: "15px 40px",
              marginLeft: "100px",
              marginTop: "10px",
            }}
          >
            Add Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
