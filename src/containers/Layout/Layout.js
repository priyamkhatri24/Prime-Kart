import React, { Component } from "react";
import Toolbar from "../Toolbar/Toolbar";
import Landing from "../Landing/Landing";
import Footer from "../../components/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import CheckoutProduct from "../../containers/CheckoutProduct/CheckoutProduct";
import { connect } from "react-redux";
import * as actionTypes from "../../store/Actions/Actions";
import Modal from "../../UI/Modal/Modal";
import Login from "../Login/Login";
import CategoryPage from "../CategoryPage/CategoryPage";
import Cart from "../Cart/Cart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Error from "../../components/Error/Error";
import MyOrders from "../MyOrders/MyOrders";

class Layout extends Component {
  cancelModalHandler = () => {
    this.setState({ isLoginState: true });
    this.props.cancelModalHandler();
  };
  render() {
    return (
      <div>
        <Toolbar
          loginClicked={this.props.loginClickedHandler}
          logoutClicked={this.props.logoutHandler}
        />
        <Modal
          height="400px"
          cancelModal={this.cancelModalHandler}
          show={this.props.showLoginModal}
        >
          <Login />
        </Modal>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/product" component={CheckoutProduct} />
          <Route path="/category/:category" component={CategoryPage} />
          <Route path={`/cart`} component={this.props.token ? Cart : Error} />
          <Route path="/my orders" component={MyOrders} />
          <Route
            path="/checkout"
            component={this.props.token ? CheckoutForm : Error}
          />
          <Route render={() => <Error />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showLoginModal: state.authReducer.showLoginModal,
    token: state.authReducer.token,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    loginClickedHandler: () => dispatch(actionTypes.loginClicked()),
    cancelModalHandler: () => dispatch(actionTypes.cancelModalHandler()),
    logoutHandler: () => dispatch(actionTypes.logoutClicked()),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Layout);
