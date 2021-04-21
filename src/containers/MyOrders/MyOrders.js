import classes from "./MyOrders.module.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import CartProduct from "../../components/CartProduct/CartProduct";
import * as actionTypes from "../../store/Actions/Actions";
import Spinner from "../../UI/Spinner/Spinner";

class MyOrders extends Component {
  componentDidMount() {
    this.props.fetchOrders(this.props.userID);
  }

  render() {
    let orderList = [];
    let orders;
    if (!this.props.orders) {
      orders = <Spinner width="1rem" height="1rem" />;
    }
    if (this.props.orders) {
      for (let val of Object.values(this.props.orders)) {
        orderList.push(val.products);
      }
    }
    orders = orderList.flat().map((ele) => {
      return <CartProduct product={ele} key={ele.id} />;
    });
    return (
      <div className={classes.cart}>
        <div className={classes.cartList}>
          <div className={classes.heading}>
            <h3>My Orders</h3>
            <h4>
              <ion-icon name="location"></ion-icon>Delivered on
            </h4>
          </div>
          <div>{orders}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userID: state.authReducer.userID,
    orders: state.cartReducer.myOrder,
  };
};
const mapActionsToProps = (dispatch) => {
  return {
    fetchOrders: (userID) => dispatch(actionTypes.fetchOrders(userID)),
  };
};
export default connect(mapStateToProps, mapActionsToProps)(MyOrders);
