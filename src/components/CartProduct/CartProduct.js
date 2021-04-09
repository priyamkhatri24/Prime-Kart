import classes from "./CartProduct.module.css";
import React from "react";
import sample from "../../assets/1.png";

const cartProduct = (props) => {
  return (
    <React.Fragment>
      <div className={classes.cartProduct}>
        <div className={classes.imageColumn}>
          <img alt="product" className={classes.cartImg} src={sample}></img>
          <div className={classes.plusminus}>
            <p className={classes.increment}>-</p>
            <p className={classes.qty}>1</p>
            <p className={classes.decrement}>+</p>
          </div>
        </div>
        <div className={classes.textColumn}>
          <h3 className={classes.title}>Prodyct name</h3>
          <p className={classes.property}>Size: 36</p>
          <p className={classes.property}>Color: Maroon</p>
          <p className={classes.property}>Color plating: Gold</p>
          {/* <p className={classes.description}>
            lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            ipsum
          </p> */}
          <div className={classes.prices}>
            <h3 className={classes.price}>₹ 10,110</h3>
            <p className={classes.crossedPrice}>Rs. 12000</p>
            <p className={classes.discount}>50% off</p>
          </div>
          <h3 className={classes.remove}>REMOVE</h3>
        </div>
        <div className={classes.deliveryDate}>
          <p className={classes.delivery}>
            Delivery by: Friday April 16th | Free
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default cartProduct;
