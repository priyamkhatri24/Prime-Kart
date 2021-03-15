import React, { Component } from "react";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import img from "../../assets/1.png";
import classes from "./Landing.module.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <Categories />
        <Header />
        <h1 className={classes.subHead}>Products</h1>

        <div className={classes.products}>
          <Product
            title="Sneakers"
            category="Men's Fashion"
            price={1220}
            src={img}
          />
          <Product
            title="Sneakers"
            category="Men's Fashion"
            price={1220}
            src={img}
          />
          <Product
            title="Sneakers"
            category="Men's Fashion"
            price={1220}
            src={img}
          />
          <Product
            title="Sneakers"
            category="Men's Fashion"
            price={1220}
            src={img}
          />
          <Product
            title="Sneakers"
            category="Men's Fashion"
            price={1220}
            src={img}
          />
          <Product
            title="Sneakers"
            category="Men's Fashion"
            price={1220}
            src={img}
          />
          <Product
            title="Sneakers"
            category="Men's Fashion"
            price={1220}
            src={img}
          />
          <Product
            title="Sneakers"
            category="Men's Fashion"
            price={1220}
            src={img}
          />
          <Product
            title="Sneakers"
            category="Men's Fashion"
            price={1220}
            src={img}
          />
          <Product
            title="Sneakers"
            category="Men's Fashion"
            price={1220}
            src={img}
          />
        </div>
      </div>
    );
  }
}

export default Landing;
