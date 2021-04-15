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
    isLoginState: true,
  };
  proceedToSignupHandler = () => {
    const form = { ...this.state.form };
    form.email.value = "";
    form.password.value = "";
    this.setState({ isLoginState: false, form: form });
    this.props.resetAuthState();
  };
  proceedToLoginHandler = () => {
    const form = { ...this.state.form };
    form.email.value = "";
    form.password.value = "";
    this.setState({ isLoginState: true, form: form });
    this.props.resetAuthState();
  };

  inputChangedHandler = (e) => {
    const form = { ...this.state.form };
    form[e.target.name].value = e.target.value;
    this.setState({ form: form });
  };

  authHandler = (e) => {
    e.preventDefault();

    if (this.state.isLoginState) {
      this.props.loginHandler(
        this.state.form.email.value,
        this.state.form.password.value
      );
    } else {
      this.props.signupHanlder(
        this.state.form.email.value,
        this.state.form.password.value
      );
    }
  };

  render() {
    const greenMsg = [classes.message, classes.green].join(" ");
    const redMsg = [classes.message, classes.red].join(" ");
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
          <h2>{this.state.isLoginState ? "Login" : "Signup"}</h2>
          <p className={classes.leftSideText}>
            {this.state.isLoginState
              ? "Get access to your Orders, Wishlist and Recommendations"
              : "Lets get started, Signup and create your own Primekart"}
          </p>
          <img className={classes.img} src={img} alt="Login"></img>
        </div>
        <div className={classes.rightSide}>
          <p
            className={
              this.props.userID || this.props.signupSuccess ? greenMsg : redMsg
            }
          >
            {this.props.message}
          </p>
          <form className={classes.loginForm}>
            {authForm}
            <p className={classes.grayPara}>
              By continuing, you agree to PrimeKart's Terms of Use and Privacy
              Policy.
            </p>
            {this.state.isLoginState ? (
              <button
                onClick={this.authHandler}
                className={classes.loginButton}
              >
                Login
              </button>
            ) : (
              <button
                onClick={this.authHandler}
                className={classes.loginButton}
              >
                Signup
              </button>
            )}
          </form>
          {this.state.isLoginState ? (
            <p className={classes.bottomText}>
              New to Primekart?{" "}
              <span
                onClick={this.proceedToSignupHandler}
                className={classes.createAccount}
              >
                Create an account
              </span>
            </p>
          ) : (
            <p
              onClick={this.proceedToLoginHandler}
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
  return {
    email: state.authReducer.email,
    userID: state.authReducer.userID,
    token: state.authReducer.token,
    error: state.authReducer.error,
    signupSuccess: state.authReducer.signupSuccess,
    message: state.authReducer.message,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    loginHandler: (email, password) =>
      dispatch(actionTypes.loginHandler(email, password)),
    signupHanlder: (email, password) =>
      dispatch(actionTypes.signupHanlder(email, password)),
    resetAuthState: () => dispatch(actionTypes.resetAuthState()),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Login);
