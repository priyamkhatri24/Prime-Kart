import classes from "./SideDrawer.module.css";
import React, { Component } from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actionTypes from "../../store/Actions/Actions";

class SideDrawer extends Component {
  render() {
    let drawerClass;
    if (this.props.showSideDrawer) {
      drawerClass = [classes.sideDrawer];
    } else {
      drawerClass = [classes.sideDrawer, classes.hidden];
    }
    return (
      <>
        {this.props.showSideDrawer ? (
          <Backdrop clicked={this.props.openSideDrawerHandler} />
        ) : null}

        <div className={drawerClass.join(" ")}>
          <div className={classes.topSection}>
            <h2>PrimeKart</h2>
          </div>
          <div className={classes.bottomSection}>
            {this.props.token ? (
              <NavLink to={`/cart`} onClick={this.props.openSideDrawerHandler}>
                <button className={classes.cartBtn}>
                  Cart
                  {this.props.cart.length ? (
                    <span className={classes.cartLength}>
                      {this.props.cart.length}
                    </span>
                  ) : null}
                </button>
              </NavLink>
            ) : null}
            {this.props.token ? (
              <NavLink
                to={`/my orders?token=${this.props.token}`}
                onClick={this.props.openSideDrawerHandler}
              >
                <button className={classes.cartBtn}>My Orders</button>
              </NavLink>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
    token: state.authReducer.token,
    showSideDrawer: state.cartReducer.showSideDrawer,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    openSideDrawerHandler: () => dispatch(actionTypes.openSideDrawerHandler()),
  };
};
export default connect(mapStateToProps, mapActionsToProps)(SideDrawer);
