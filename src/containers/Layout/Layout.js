import React, { Component } from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Landing from "../Landing/Landing";
import Footer from "../../components/Footer/Footer";
import { Route } from "react-router-dom";
import CheckoutProduct from "../../containers/CheckoutProduct/CheckoutProduct";

class Layout extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <Route exact path="/" component={Landing} />
        <Route path="/product" component={CheckoutProduct} />
        <Footer />
      </div>
    );
  }
}

export default Layout;
