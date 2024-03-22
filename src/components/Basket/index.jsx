import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const { basket, kom } = useSelector((s) => s);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [user, setInputValue] = useState("");
  const getProducts = (data) => {
    let res = {
      user,
    };
    dispatch({ type: "ADD_PRODUCTS", payload: res });
    console.log(res);
  };

  const getDeleete = (data) => {
    dispatch({ type: "ADD_BASKET_DELETE", payload: data });
  };

  const nav = useNavigate();

  let all = basket.reduce((acc, el) => {
    return acc + el.price * page;
  }, 0);
  const getDelete = (data) => {
    dispatch({ type: "ADD_DELETE", payload: data.id });
  };

  const getOt = () => {
    setInputValue("");
  };
  return (
    <div id="Basket">
      {basket.map((el) => (
        <div>
          <div className="section">
            <button
              onClick={() => getDelete(el)}
              style={{
                position: "absolute",
                marginLeft: "460px",
                fontSize: "20px",
                background: "rgb(41, 38, 38)",
                color: "white",
                border: "none",
              }}
            >
              <ion-icon name="close-circle-outline"></ion-icon>
            </button>
            <img style={{ width: "200px" }} src={el.img} alt="" />
            <h3
              style={{
                position: "absolute",
                color: "white",
                marginTop: "-180px",
                marginLeft: "240px",
              }}
            >
              {el.name}
            </h3>
            <p
              style={{
                position: "absolute",
                marginTop: "-130px",
                marginLeft: "240px",
                color: "white",
              }}
            >
              {el.description}
            </p>
            <button
              style={{
                display: "flex",
                marginLeft: "170px",
                background: "#000",
                color: "white",
                border: "none",
                marginTop: "-50px",
                position: "absolute",
                alignItems: "center",
                gap: "2px",
              }}
            >
              <h3>{el.price * page}</h3>

              <ion-icon name="pricetags-outline"></ion-icon>
            </button>
            <div
              style={{
                position: "absolute",
                display: "flex",
                color: "white",
                marginTop: "-50px",
                marginLeft: "240px",
                gap: "10px",
                border: "2px solid black",
              }}
            >
              <button onClick={() => setPage(page - 1)}>-</button>
              <h3>{page}</h3>
              <button onClick={() => setPage(page + 1)}>+</button>
            </div>
            <button className="box">В корзину</button>
          </div>
        </div>
      ))}
      <div>
        <div>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            style={{
              position: "absolute",
              marginTop: "300px",
              marginLeft: "-1040px",
              padding: "20px 0px",
              width: "500px",
              fontFamily: "normal",
              height: "200px",
              fontSize: "20px",
            }}
            type="text"
            placeholder="Комментарий к заказу..."
          />

          <div
            style={{
              position: "absolute",
              marginLeft: "-650px",
              marginTop: "450px",
              padding: "10px 10px",
              display: "flex",
            }}
          >
            <button onClick={() => getProducts()}>Ок</button>
            <button onClick={() => getOt()}>Отмена</button>
          </div>
        </div>
      </div>
      {kom?.map((el) => (
        <p style={{ background: "red" }}>{el.user}</p>
      ))}
      <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          marginLeft: "700px",

          marginTop: "720px",
          background: "rgb(41, 38, 38)",
          color: "white",
          width: "300px",
          height: "200px",
          borderRadius: "20px",
        }}
      >
        <h1 style={{ fontSize: "20px", marginLeft: "20px" }}>
          Общая сумма {all} сом
        </h1>
        <button
          style={{
            position: "absolute",
            padding: "10px 20px",
            marginLeft: "150px",
            marginTop: "100px",
          }}
        >
          Заказать
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          marginTop: "1000px",
          height: "100px",
          marginLeft: "-500px",
        }}
      >
        <button
          style={{ padding: "10px 40px", marginLeft: "-10px" }}
          onClick={() => nav("/card")}
        >
          Добавить еще
        </button>
        <button onClick={() => getDeleete()} style={{ padding: "10px 40px" }}>
          Очистить корзину
        </button>
      </div>
    </div>
  );
};

export default Basket;
