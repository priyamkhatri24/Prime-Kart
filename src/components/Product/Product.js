import classes from "./Product.module.css";
import React from "react";

const product = (props) => {
  return (
    <div className={classes.product}>
      <img alt="img" src={props.src}></img>
      <div className={classes.productText}>
        <h4>{props.title}</h4>
        <p>{props.category}</p>
        <div className={classes.prices}>
          <h4>₹ {props.price}</h4>
          <p className={classes.crossedPrice}>₹ {props.price * 1.5}</p>
          <p className={classes.discount}>50% off</p>
        </div>
      </div>
    </div>
  );
};

export default product;
