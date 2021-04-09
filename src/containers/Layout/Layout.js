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

class Layout extends Component {
  render() {
    return (
      <div>
        <Toolbar loginClicked={this.props.loginClickedHandler} />
        <Modal
          cancelModal={this.props.cancelModalHandler}
          show={this.props.showLoginModal}
        >
          <Login />
        </Modal>
        <Route exact path="/" component={Landing} />
        <Route path="/product" component={CheckoutProduct} />
        <Route path="/category/:category" component={CategoryPage} />
        <Route path="/cart" component={Cart} />
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
