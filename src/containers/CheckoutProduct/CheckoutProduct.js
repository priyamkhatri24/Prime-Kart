import { React, Component } from "react";
import classes from "./CheckoutProduct.module.css";
import { connect } from "react-redux";

class CheckoutProduct extends Component {
  state = {
    specs: {
      size: 36,
      color: "maroon",
      plating: "goldenrod",
      deliveryMethod: "cheapest",
    },
  };
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
  componentDidUpdate() {
    console.log(this.state.specs);
  }
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
      <div className={classes.sizeBar}>
        <p>Size</p>
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
      </div>
    );
    const colorBar = (
      <div className={classes.colorBar}>
        <p>Colour</p>
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
      </div>
    );
    const platingBar = (
      <div>
        <div className={classes.colorBar}>
          <p>Color plating</p>
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
        </div>
      </div>
    );
    return (
      <div className={classes.checkoutProduct}>
        <div className={classes.leftColumn}>
          <img className={classes.img} alt="Product" src={product.image} />
          <div className={classes.btns}>
            <button className={cartBtn.join(" ")}>
              <ion-icon name="cart"></ion-icon>ADD TO CART
            </button>
            <button className={flashBtn.join(" ")}>
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
          {product.category === "men clothing" ||
          product.category === "women clothing"
            ? sizeBar
            : null}
          {product.category === "men clothing" ||
          product.category === "women clothing"
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
    product: state.clickedProduct,
  };
};
const mapActionsToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapActionsToProps)(CheckoutProduct);
