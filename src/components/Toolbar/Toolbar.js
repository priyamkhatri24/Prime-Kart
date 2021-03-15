import classes from "./Toolbar.module.css";
import React from "react";
import Input from "../../UI/Input/Input";

const toolbar = () => {
  return (
    <div className={classes.toolbar}>
      <h3 className={classes.logo}>PrimeKart</h3>
      <span className={classes.search}>
        <Input type="text" placeholder="Search for products" />
        <ion-icon
          className={classes.searchIcon}
          name="search-outline"
        ></ion-icon>
      </span>
      <button className={classes.loginBtn}>Login</button>
      <button className={classes.cartBtn}>
        <ion-icon name="cart"></ion-icon>Cart
      </button>
    </div>
  );
};

export default toolbar;
