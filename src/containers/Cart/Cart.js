import React, { Component } from "react";
import CartProduct from "../../components/CartProduct/CartProduct";
import classes from "./Cart.module.css";

class Cart extends Component {
  render() {
    return (
      <div className={classes.cart}>
        <div className={classes.cartList}>
          <div className={classes.heading}>
            <h3>My Cart (2)</h3>
            <h4>
              <ion-icon name="location"></ion-icon>Delivery
            </h4>
          </div>
          <div>
            <CartProduct />
            <CartProduct />
          </div>
          <div className={classes.placeOrder}>
            <button className={classes.placeOrderBtn}>PLACE ORDER</button>
          </div>
        </div>

        <div className={classes.summary}>
          <p className={classes.summaryHead}>PRICE DETAILS</p>
          <div className={classes.summaryBody}>
            <div className={classes.summaryText}>
              <p>Price (2)</p>
              <p>10,120</p>
            </div>
            <div className={classes.summaryText}>
              <p>Discount</p>
              <p>-1000</p>
            </div>
            <div className={classes.summaryText}>
              <p>Delivery Charges</p>
              <p>FREE</p>
            </div>
            <hr className={classes.horizontalLine}></hr>
            <div
              className={[classes.summaryText, classes.totalPrice].join(" ")}
            >
              <p>Total Price:</p>
              <p>101010</p>
            </div>
            <hr className={classes.horizontalLine}></hr>
            <p className={classes.save}>You will save Rs. xyz in this</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
