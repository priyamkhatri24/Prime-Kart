import React, { Component } from "react";
import Toolbar from "../Toolbar/Toolbar";
import Landing from "../Landing/Landing";
import Footer from "../../components/Footer/Footer";
import { Route } from "react-router-dom";
import CheckoutProduct from "../../containers/CheckoutProduct/CheckoutProduct";
import { connect } from "react-redux";
import * as actionTypes from "../../store/Actions/Actions";
import Modal from "../../UI/Modal/Modal";
import Login from "../../components/Login/Login";
import CategoryPage from "../CategoryPage/CategoryPage";
import Cart from "../Cart/Cart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

class Layout extends Component {
  state = {
    isLoginState: true,
  };
  proceedToSignupHandler = () => {
    this.setState({ isLoginState: false });
  };
  proceedToLoginHandler = () => {
    this.setState({ isLoginState: true });
  };
  cancelModalHandler = () => {
    this.setState({ isLoginState: true });
    this.props.cancelModalHandler();
  };
  render() {
    return (
      <div>
        <Toolbar loginClicked={this.props.loginClickedHandler} />
        <Modal
          height="400px"
          cancelModal={this.cancelModalHandler}
          show={this.props.showLoginModal}
        >
          <Login
            proceedToSignup={this.proceedToSignupHandler}
            proceedToLogin={this.proceedToLoginHandler}
            isLogin={this.state.isLoginState}
          />
        </Modal>
        <Route exact path="/" component={Landing} />
        <Route path="/product" component={CheckoutProduct} />
        <Route path="/category/:category" component={CategoryPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={CheckoutForm} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showLoginModal: state.showLoginModal,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    loginClickedHandler: () => dispatch(actionTypes.loginClicked()),
    cancelModalHandler: () => dispatch(actionTypes.cancelModalHandler()),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Layout);
