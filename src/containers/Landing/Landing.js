import React, { Component } from "react";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import img from "../../assets/1.png";
import classes from "./Landing.module.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/Actions/Actions";

class Landing extends Component {
  
  componentDidMount() {
    this.props.loadProductsHandler();
  }
  
  render() {
    let products
    if(this.props.products.length) {
      products = this.props.products.map(ele => {
        return <Product
            title={ele.title}
            category={ele.category}
            price={ele.price}
            src={ele.image}
            key={ele.title}
          />
      })
    }

    if(!this.props.products.length) {
      products = "Loading..."
    }
    return (
      <div>
        <Categories />
        <Header />
        <h1 className={classes.subHead}>Products</h1>

        <div className={classes.products}>
          
          {products}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    loadProductsHandler: () => dispatch(actionTypes.loadProducts()),
  };
};
export default connect(mapStateToProps, mapActionsToProps)(Landing);
