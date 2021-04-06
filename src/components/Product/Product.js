import classes from "./Product.module.css";
import React from "react";

const product = (props) => {
  const crossedPriceAmount = props.price * 1.5;
  return (
    <div id={props.id} className={classes.product} onClick={props.clicked}>
      <img alt="img" src={props.src}></img>
      <div className={classes.productText}>
        <h4>{props.title}</h4>
        <p>{props.category}</p>
        <div className={classes.prices}>
          <h4>₹ {props.price}</h4>
          <p className={classes.crossedPrice}>
            ₹ {crossedPriceAmount.toFixed(2)}
          </p>
          <p className={classes.discount}>50% off</p>
        </div>
      </div>
    </div>
  );
};

export default product;
