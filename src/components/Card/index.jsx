import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card = ({ el }) => {
  const { products } = useSelector((s) => s);
  const [main, setMain] = useState(false);
  console.log(products);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const getBasket = (data) => {
    nav("/basket");
    dispatch({ type: "ADD_BASKET", payload: data });
  };
  return (
    <div id="Card" style={{ position: "absolute" }}>
      {products.map((el) => (
        <div>
          <div className="content">
            <div className="block">
              <img src={el.img} alt="" />
              <h1>{el.name}</h1>
              <p>{el.description}</p>
              <h4 style={{ marginLeft: "30px" }}>
                {el.price} <ion-icon name="pricetags-outline"></ion-icon>
              </h4>
              <button
                style={{
                  position: "absolute",
                  marginLeft: "250px",
                  padding: "10px 10px",
                }}
                onClick={() => getBasket(el)}
              >
                Add Basket
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
