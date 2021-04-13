import React, { Component } from "react";
import CartProduct from "../../components/CartProduct/CartProduct";
import classes from "./Cart.module.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/Actions/Actions";

class Cart extends Component {
  removeProductHandler = (product) => {
    this.props.removeProductHandler(product);
  };
  continueShoppingHandler = () => {
    this.props.history.push("/");
  };
  placeOrderHandler = (totalPrice) => {
    this.props.history.push("/checkout");
    this.props.updateTotalPrice((totalPrice * 72).toFixed(2));
    window.scroll({ top: 0 });
  };

  render() {
    const priceList = this.props.cart.map((ele) => {
      return ele.price * ele.specs.qty;
    });
    const totalPrice = priceList.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    let cartList;
    if (!this.props.cart.length)
      cartList = <h2>Your cart is empty. Please start adding items.</h2>;
    if (this.props.cart.length) {
      cartList = this.props.cart.map((ele) => {
        return (
          <CartProduct
            product={ele}
            qtyIncrement={this.props.qtyIncrement.bind(this, ele.id)}
            qtyDecrement={this.props.qtyDecrement.bind(this, ele.id)}
            key={ele.id}
            remove={this.removeProductHandler.bind(this, ele)}
          />
        );
      });
    }
    return (
      <div className={classes.cart}>
        <div className={classes.cartList}>
          <div className={classes.heading}>
            <h3>My Cart ({this.props.cart.length})</h3>
            <h4>
              <ion-icon name="location"></ion-icon>Delivery
            </h4>
          </div>
          <div>{cartList}</div>
          {this.props.cart.length ? (
            <div className={classes.placeOrder}>
              <h3 onClick={this.continueShoppingHandler}>CONTINUE SHOPPING</h3>
              <button
                onClick={this.placeOrderHandler.bind(this, totalPrice)}
                className={classes.placeOrderBtn}
              >
                PLACE ORDER
              </button>
            </div>
          ) : null}
        </div>

        <div className={classes.summary}>
          <p className={classes.summaryHead}>PRICE DETAILS</p>
          <div className={classes.summaryBody}>
            <div className={classes.summaryText}>
              <p>Price ({this.props.cart.length})</p>
              <p>{(totalPrice * 1.5 * 72).toFixed(2)}</p>
            </div>
            <div className={classes.summaryText}>
              <p>Discount</p>
              <p>-{(totalPrice * 0.5 * 72).toFixed(2)}</p>
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
              <p>{(totalPrice * 72).toFixed(2)}</p>
            </div>
            <hr className={classes.horizontalLine}></hr>
            <p className={classes.save}>
              You will save Rs. {(totalPrice * 0.5 * 72).toFixed(2)} in this
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapActionsToProps = (dispatch) => {
  return {
    removeProductHandler: (product) =>
      dispatch(actionTypes.removeProduct(product)),
    qtyIncrement: (id) => dispatch(actionTypes.qtyIncrement(id)),
    qtyDecrement: (id) => dispatch(actionTypes.qtyDecrement(id)),
    updateTotalPrice: (totalPrice) =>
      dispatch(actionTypes.updateTotalPrice(totalPrice)),
  };
};
export default connect(mapStateToProps, mapActionsToProps)(Cart);
