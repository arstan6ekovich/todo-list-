import React, { useState } from "react";
import img from "../../components/img/Ethiopia.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../Card";

const Header = () => {
  const [inputValue, setInput] = useState("");
  const nav = useNavigate();
  return (
    <div id="Header">
      <div className="container">
        <div className="Header">
          <img src={img} alt="" />
          <Link to={"/card"}>
            <h1 className="text-yellow">s</h1>
          </Link>
          <div className="text-nav">
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Я ищу"
            />
            <button
              style={{
                position: "absolute",
                marginLeft: "700px",
                padding: "10px 10px",
                background: "white",
                border: "none",
                marginTop: "2px",
                borderRadius: "10px",
              }}
              onClick={() => nav(`/search/${inputValue}`)}
            >
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>
          <Link to={"/products"} style={{ position: "absolute" }}>
            <button className="btn">
              <ion-icon name="cart-outline"></ion-icon>
            </button>
          </Link>
          <div className="buttons">
            <button style={{ fontSize: "30px", borderRadius: "10px" }}>
              <ion-icon name="sunny-outline"></ion-icon>
            </button>
            <button style={{ fontSize: "30px", borderRadius: "10px" }}>
              <ion-icon name="moon-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", marginTop: "50px" }}>
        <div id="Hero">
          <button>Завтрак</button>
          <button>Салаты</button>
          <button>Десерты</button>
          <button>Холодные напитки</button>
          <button>Кофе</button>
          <button>Десерты</button>
          <button>Холодные напитки</button>
          <button>Кофе</button>
          <button>Чай</button>
        </div>
      </div>
      <div>
        <div className="product"></div>
      </div>
    </div>
  );
};

export default Header;
