import React, { Component } from "react";
import Categories from "../../components/Categories/Categories";
import Header from "../Header/Header";
import Product from "../../components/Product/Product";
import classes from "./Landing.module.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/Actions/Actions";
import Spinner from "../../UI/Spinner/Spinner";

class Landing extends Component {
  state = {
    // showLoginModal: false,
  };

  componentDidMount() {
    this.props.loadProductsHandler();
  }

  productClickedHandler = (product) => {
    // this.setState({ showLoginModal: true });
    this.props.productClicked(product);

    this.props.history.push("/product");
    window.scroll({ top: 0 });
  };

  // cancelModalHandler = () => {
  //   this.setState({ showLoginModal: false });
  // };

  render() {
    let products;
    if (this.props.products.length) {
      products = this.props.products.map((ele) => {
        const productPrice = ele.price * 72;
        return (
          <Product
            title={ele.title}
            category={ele.category}
            price={productPrice.toFixed(2)}
            src={ele.image}
            key={ele.title}
            id={ele.id}
            clicked={this.productClickedHandler.bind(this, ele)}
          />
        );
      });
    }

    if (!this.props.products.length) {
      products = <Spinner width="5rem" height="5rem" />;
    }
    return (
      <div>
        <Categories />
        <Header />
        <h1 className={classes.subHead}>Products</h1>
        <div className={classes.products}>{products}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    loadProductsHandler: () => dispatch(actionTypes.loadProducts()),
    productClicked: (product) => dispatch(actionTypes.productClicked(product)),
  };
};
export default connect(mapStateToProps, mapActionsToProps)(Landing);
