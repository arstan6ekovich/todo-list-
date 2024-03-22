import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Seacrh = () => {
  const { products } = useSelector((s) => s);
  const { redName } = useParams();
  let finddetails = products.find((el) => el.name === redName);
  return (
    <div>
      <img
        style={{ marginTop: "200px", marginLeft: "200px" }}
        src={finddetails?.img}
        alt=""
      />
      <div style={{ marginLeft: "700px", marginTop: "-300px" }}>
        <h1>{finddetails?.name}</h1>
        <p>{finddetails?.description}</p>
        <h2 style={{ marginTop: "20px" }}>{finddetails?.price} сом</h2>
      </div>
    </div>
  );
};

export default Seacrh;
