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

  inputChangedHandler = (e) => {
    this.setState({ query: e.target.value });
    this.props.querySubmit(e.target.value);
  };
  querySubmitHandler = (e) => {
    e.preventDefault();
    this.props.fetchCategories(this.props.query);
    this.props.history.push(`/category/${this.props.query}`);
  };

  render() {
    return (
      <div className={classes.toolbar}>
        <NavLink to="/">
          <h3 className={classes.logo}>PrimeKart</h3>
        </NavLink>
        <span className={classes.search}>
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
        <button onClick={this.props.loginClicked} className={classes.loginBtn}>
          Login
        </button>
        <NavLink to="/cart">
          <button className={classes.cartBtn}>
            <ion-icon name="cart"></ion-icon>Cart
            {this.props.cart.length ? (
              <span className={classes.cartLength}>
                {this.props.cart.length}
              </span>
            ) : null}
          </button>
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.searchQuery,
    cart: state.cart,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    querySubmit: (query) => dispatch(actionTypes.querySubmit(query)),
    fetchCategories: (query) => dispatch(actionTypes.fetchByCategories(query)),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Toolbar));
