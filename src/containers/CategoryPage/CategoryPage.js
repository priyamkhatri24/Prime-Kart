import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Categories from "../../components/Categories/Categories";
import Product from "../../components/Product/Product";
import Spinner from "../../UI/Spinner/Spinner";
import { connect } from "react-redux";
import * as actionTypes from "../../store/Actions/Actions";
import classes from "./CategoryPage.module.css";

class CategoryPage extends Component {
  productClickedHandler = (product) => {
    this.props.productClicked(product);
    this.props.history.push("/product");
    window.scroll({ top: 0 });
  };

  render() {
    const category = this.props.match.params.category;
    let products = <Spinner />;
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
    return (
      <div>
        <Categories />
        <Header category={category} />
        <h2 className={classes.subHead}>{this.props.products[0]?.category}</h2>
        <div className={classes.products}>{products}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.byCategory,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    productClicked: (product) => dispatch(actionTypes.productClicked(product)),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(CategoryPage);
