import classes from "./Login.module.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import img from "../../assets/giphy.gif";
import * as actionTypes from "../../store/Actions/Actions";

class Login extends Component {
  state = {
    form: {
      email: {
        value: "",
        placeholder: "Enter email",
        type: "text",
        name: "email",
      },
      password: {
        value: "",
        placeholder: "Enter password",
        type: "text",
        name: "password",
      },
    },
  };

  inputChangedHandler = (e) => {
    const form = { ...this.state.form };
    form[e.target.name].value = e.target.value;
    this.setState({ form: form });
  };

  signupHanlder = (e) => {
    e.preventDefault();

    this.props.signupHanlder(
      this.state.form.email.value,
      this.state.form.password.value
    );
  };

  render() {
    const form = { ...this.state.form };
    const formAttributes = Object.keys(form);
    const authForm = formAttributes.map((ele) => {
      return (
        <input
          key={form[ele].placeholder}
          onChange={this.inputChangedHandler}
          type={form[ele].type}
          placeholder={form[ele].placeholder}
          value={form[ele].value}
          name={form[ele].name}
        ></input>
      );
    });
    return (
      <div className={classes.login}>
        <div className={classes.leftSide}>
          <h2>{this.props.isLogin ? "Login" : "Signup"}</h2>
          <p>
            {this.props.isLogin
              ? "Get access to your Orders, Wishlist and Recommendations"
              : "Lets get started"}
          </p>
          <img className={classes.img} src={img} alt="Login"></img>
        </div>
        <div className={classes.rightSide}>
          <form className={classes.loginForm}>
            {authForm}
            <p className={classes.grayPara}>
              By continuing, you agree to PrimeKart's Terms of Use and Privacy
              Policy.
            </p>
            {this.props.isLogin ? (
              <button
                onClick={this.props.loginHandler}
                className={classes.loginButton}
              >
                Login
              </button>
            ) : (
              <button
                onClick={this.signupHanlder}
                className={classes.loginButton}
              >
                Signup
              </button>
            )}
          </form>
          {this.props.isLogin ? (
            <p className={classes.bottomText}>
              New to Primekart?{" "}
              <span
                onClick={this.props.proceedToSignup}
                className={classes.createAccount}
              >
                Create an account
              </span>
            </p>
          ) : (
            <p
              onClick={this.props.proceedToLogin}
              className={[classes.bottomText, classes.createAccount].join(" ")}
            >
              Proceed to Login
            </p>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapActionsToProps = (dispatch) => {
  return {
    loginHandler: () => dispatch(actionTypes.loginHandler()),
    signupHanlder: (email, password) =>
      dispatch(actionTypes.signupHanlder(email, password)),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
