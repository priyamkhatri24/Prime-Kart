import classes from "./Toolbar.module.css";
import React, { Component } from "react";
import Input from "../../UI/Input/Input";
import { connect } from "react-redux";
import * as actionTypes from "../../store/Actions/Actions";
import { NavLink, withRouter } from "react-router-dom";

class Toolbar extends Component {
  state = {
    query: "",
  };

  logoutClickedHandler = () => {
    this.props.logoutClicked();
    this.props.history.push("/");
  };

  inputChangedHandler = (e) => {
    this.setState({ query: e.target.value });
    this.props.querySubmit(e.target.value);
  };
  querySubmitHandler = (e) => {
    e.preventDefault();
    this.props.fetchCategories(this.props.query);
    this.props.history.push(`/category/${this.props.query}`);
    e.target.closest("form").reset();
  };

  render() {
    return (
      <>
        <div className={classes.toolbar}>
          {this.props.token ? (
            <div
              onClick={this.props.openSideDrawerHandler}
              className={classes.menuIcon}
            >
              <ion-icon name="menu"></ion-icon>
            </div>
          ) : null}
          <NavLink className={classes.logoContainer} to="/">
            <h3 className={classes.logo}>PrimeKart</h3>
          </NavLink>
          <span className={classes.searchFullWidth}>
            <form className={classes.toolbarForm}>
              <Input
                changed={this.inputChangedHandler}
                value={this.props.searchQuery}
                type="text"
                placeholder="Search for products"
              />
              <button onClick={this.querySubmitHandler}>
                <ion-icon
                  className={classes.searchIcon}
                  name="search-outline"
                ></ion-icon>
              </button>
            </form>
          </span>
          {!this.props.token ? (
            <button
              onClick={this.props.loginClicked}
              className={classes.loginBtn}
            >
              Login
            </button>
          ) : (
            <button
              onClick={this.logoutClickedHandler}
              className={classes.loginBtn}
            >
              Logout
            </button>
          )}
          {this.props.token ? (
            <NavLink to={`/cart`}>
              <button className={classes.cartBtn}>
                <ion-icon name="cart"></ion-icon>Cart
                {this.props.cart.length ? (
                  <span className={classes.cartLength}>
                    {this.props.cart.length}
                  </span>
                ) : null}
              </button>
            </NavLink>
          ) : null}
          {this.props.token ? (
            <NavLink to={`/my orders?token=${this.props.token}`}>
              <button className={classes.cartBtn}>My Orders</button>
            </NavLink>
          ) : null}
        </div>
        <div className={[classes.toolbar, classes.mobileBar].join(" ")}>
          <span className={classes.searchMobileWidth}>
            <form
              className={[classes.toolbarForm, classes.mobileBarForm].join(" ")}
            >
              <Input
                changed={this.inputChangedHandler}
                value={this.props.searchQuery}
                type="text"
                placeholder="Search for products"
              />
              <button onClick={this.querySubmitHandler}>
                <ion-icon
                  className={classes.searchIcon}
                  name="search-outline"
                ></ion-icon>
              </button>
            </form>
          </span>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.cartReducer.searchQuery,
    cart: state.cartReducer.cart,
    token: state.authReducer.token,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    querySubmit: (query) => dispatch(actionTypes.querySubmit(query)),
    fetchCategories: (query) => dispatch(actionTypes.fetchByCategories(query)),
    openSideDrawerHandler: () => dispatch(actionTypes.openSideDrawerHandler()),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Toolbar));
