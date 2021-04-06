import classes from "./Login.module.css";
import React from "react";
import img from "../../assets/giphy.gif";

const login = (props) => {
  return (
    <div className={classes.login}>
      <div className={classes.leftSide}>
        <h2>Login</h2>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
        <img className={classes.img} src={img} alt="Login"></img>
      </div>
      <div className={classes.rightSide}>
        <form>
          <input placeholder="Enter email"></input>
          <input placeholder="Enter password"></input>
          <p className={classes.grayPara}>
            By continuing, you agree to PrimeKart's Terms of Use and Privacy
            Policy.
          </p>
          <button className={classes.loginButton}>Login</button>
        </form>
        <p className={classes.bottomText}>
          New to Primekart? Create an account
        </p>
      </div>
    </div>
  );
};

export default login;
