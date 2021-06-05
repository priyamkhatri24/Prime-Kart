import React, { Component } from "react";
import classes from "./CheckoutProduct.module.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/Actions/Actions";

class CheckoutProduct extends Component {
  state = {
    specs: {
      size: null,
      color: null,
      plating: null,
      deliveryMethod: null,
      qty: 1,
    },
    varClass: classes.varClass,
  };

  specsRef = React.createRef();

  colorPlatingSelectHandler = (color) => {
    const updatedSpecs = { ...this.state.specs };
    updatedSpecs.plating = color;
    this.setState({ specs: updatedSpecs });
  };

  sizeSelectHandler = (size) => {
    const updatedSpecs = { ...this.state.specs };
    updatedSpecs.size = size;
    this.setState({ specs: updatedSpecs });
  };

  colorSelectHandler = (color) => {
    const updatedSpecs = { ...this.state.specs };
    updatedSpecs.color = color;
    this.setState({ specs: updatedSpecs });
  };

  customizationAlert = () => {
    this.setState({ varClass: classes.alertClass });
  };

  addToCartHandler = () => {
    const updatedProduct = { ...this.props.product };
    updatedProduct.specs = this.state.specs;
    if (updatedProduct.category === "jewelery") {
      if (!updatedProduct.specs.plating) {
        this.customizationAlert();
        this.specsRef.current.scrollIntoView({ behavior: "smooth" });

        return;
      }
    }
    if (
      updatedProduct.category === "men's clothing" ||
      updatedProduct.category === "women's clothing"
    ) {
      if (!updatedProduct.specs.size) {
        this.customizationAlert();
        this.specsRef.current.scrollIntoView({ behavior: "smooth" });

        return;
      }
      if (!updatedProduct.specs.color) {
        this.customizationAlert();
        window.scroll({ top: 0, behavior: "smooth" });
        this.specsRef.current.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    this.setState({ varClass: classes.varClass });
    if (this.props.token) {
      this.props.history.push(`/cart?token=${this.props.token}`);
      this.props.addToCartHandler(updatedProduct);
      window.scroll({ top: 0, behavior: "smooth" });
    } else {
      this.props.loginModalHandler();
      window.scroll({ top: 0, behavior: "smooth" });
    }
  };

  render() {
    const sizes = [36, 38, 40, 42, 44];
    const colors = ["maroon", "darkblue", "darkgreen", "white", "black"];
    const platings = ["goldenrod", "silver", "rosybrown"];
    const cartBtn = [classes.btn, classes.cart];
    const flashBtn = [classes.btn, classes.flash];
    const product = this.props.product;
    const crossedPriceAmount = product.price * 1.5 * 72;
    const productPrice = product.price * 72;
    const sizeBar = (
      <div ref={this.specsRef} className={classes.sizeBar}>
        <p className={this.state.varClass}>Size</p>
        {sizes.map((ele) => (
          <h5
            style={{
              border: `${
                this.state.specs.size === ele
                  ? "3px solid #2874f0"
                  : "1px solid black"
              }`,
            }}
            onClick={this.sizeSelectHandler.bind(this, ele)}
            key={ele}
          >
            {ele}
          </h5>
        ))}
        {this.state.varClass === classes.alertClass ? (
          <p className={classes.alertClass}>Please select a color!</p>
        ) : null}
      </div>
    );
    const colorBar = (
      <div className={classes.colorBar} ref={this.specsRef}>
        <p className={this.state.varClass}>Colour</p>
        {colors.map((ele) => (
          <div
            onClick={this.colorSelectHandler.bind(this, ele)}
            key={ele}
            style={{
              backgroundColor: `${ele}`,
              width: "10px",
              height: "10px",
              border: `${
                this.state.specs.color === ele
                  ? "3px solid #2874f0"
                  : "1px solid black"
              }`,
              margin: "0px 10px",
              padding: "10px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          ></div>
        ))}
        {this.state.varClass === classes.alertClass ? (
          <p className={classes.alertClass}>Please select a color!</p>
        ) : null}
      </div>
    );
    const platingBar = (
      <div>
        <div ref={this.specsRef} className={classes.colorBar}>
          <p className={this.state.varClass}>Color plating</p>
          {platings.map((ele) => (
            <div
              onClick={this.colorPlatingSelectHandler.bind(this, ele)}
              key={ele}
              style={{
                backgroundColor: `${ele}`,
                width: "10px",
                height: "10px",
                border: `${
                  this.state.specs.plating === ele
                    ? "3px solid #2874f0"
                    : "1px solid black"
                }`,
                margin: "0px 10px",
                padding: "10px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            ></div>
          ))}
          {this.state.varClass === classes.alertClass ? (
            <p className={classes.alertClass}>Please select a Color plating</p>
          ) : null}
        </div>
      </div>
    );
    return (
      <div className={classes.checkoutProduct}>
        <div className={classes.leftColumn}>
          <img className={classes.img} alt="Product" src={product.image} />
          <div className={classes.btns}>
            <button
              onClick={this.addToCartHandler}
              className={cartBtn.join(" ")}
            >
              <ion-icon name="cart"></ion-icon>ADD TO CART
            </button>
            <button
              className={flashBtn.join(" ")}
              onClick={() => alert("Try add to cart instead")}
            >
              <ion-icon name="flash"></ion-icon>BUY NOW
            </button>
          </div>
        </div>
        <div className={classes.rightColumn}>
          <p className={classes.category}>{product.category.toUpperCase()}</p>
          <h4>{product.title}</h4>
          <p className={classes.specialPrice}>Special price</p>
          <span className={classes.prices}>
            <h2 className={classes.price}>₹{productPrice.toFixed(2)}</h2>
            <p className={classes.crossedPrice}>
              ₹{crossedPriceAmount.toFixed(2)}
            </p>
            <p className={classes.off}>50% OFF</p>
          </span>

          <p className={classes.description}>{product.description}</p>
          {product.category === "men's clothing" ||
          product.category === "women's clothing"
            ? sizeBar
            : null}
          {product.category === "men's clothing" ||
          product.category === "women's clothing"
            ? colorBar
            : null}
          {product.category === "jewelery" ? platingBar : null}
          <ul className={classes.unorderedList}>
            <span style={{ fontSize: "20px" }}>
              <strong>Available offers</strong>
            </span>
            <li>
              <strong>Bank Offer </strong>10% off on Prime Bank Cards, up to
              ₹300. On orders of ₹1750 and above
            </li>
            <li>
              <strong>Bank Offer</strong> 5% Unlimited Cashback on Primekart
              Prime Bank Credit Card
            </li>
            <li>
              <strong>Bank Offer</strong> ₹20 Off on first prepaid transaction
              using prime payments, minimum order value ₹750/-
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.cartReducer.clickedProduct,
    token: state.authReducer.token,
  };
};
const mapActionsToProps = (dispatch) => {
  return {
    addToCartHandler: (product) => dispatch(actionTypes.addToCart(product)),
    loginModalHandler: () => dispatch(actionTypes.loginClicked()),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(CheckoutProduct);
