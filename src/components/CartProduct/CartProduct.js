import classes from "./CartProduct.module.css";
import React from "react";

const cartProduct = (props) => {
  const productPrice = props.product.price * 72 * props.product.specs.qty;
  return (
    <React.Fragment>
      <div className={classes.cartProduct}>
        <div className={classes.imageColumn}>
          <img
            alt="product"
            className={classes.cartImg}
            src={props.product.image}
          ></img>
          <div className={classes.plusminus}>
            {props.needPlusminus ? (
              <p onClick={props.qtyDecrement} className={classes.decrement}>
                -
              </p>
            ) : null}
            <p className={classes.qty}>{props.product.specs.qty}</p>
            {props.needPlusminus ? (
              <p onClick={props.qtyIncrement} className={classes.increment}>
                +
              </p>
            ) : null}
          </div>
        </div>
        <div className={classes.textColumn}>
          <h3 className={classes.title}>{props.product.title}</h3>
          {props.product.specs.size ? (
            <p className={classes.property}>
              Size: {props.product.specs?.size}
            </p>
          ) : null}
          {props.product.specs.color ? (
            <p className={classes.property}>
              Color: {props.product.specs?.color}
            </p>
          ) : null}
          {props.product.specs.plating ? (
            <p className={classes.property}>
              Color Plating: {props.product.specs?.plating}
            </p>
          ) : null}
          {/* <p className={classes.description}>
            lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            ipsum
          </p> */}
          <div className={classes.prices}>
            <h3 className={classes.price}>₹ {productPrice.toFixed(2)}</h3>
            <p className={classes.crossedPrice}>
              ₹ {(productPrice * 1.5).toFixed(2)}
            </p>
            <p className={classes.discount}>50% off</p>
          </div>
          {props.needRemove ? (
            <h3 onClick={props.remove} className={classes.remove}>
              REMOVE
            </h3>
          ) : null}
        </div>
        <div className={classes.deliveryDate}>
          <p className={classes.delivery}>
            {props.needPlusminus ? "Delivery by" : "Delivered on"}: Friday April
            16th | Free
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default cartProduct;
