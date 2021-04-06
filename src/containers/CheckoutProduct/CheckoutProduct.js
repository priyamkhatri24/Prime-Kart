import { React, Component } from "react";
import classes from "./CheckoutProduct.module.css";
import { connect } from "react-redux";

class CheckoutProduct extends Component {
  render() {
    const cartBtn = [classes.btn, classes.cart];
    const flashBtn = [classes.btn, classes.flash];
    const product = this.props.product;
    const crossedPriceAmount = product.price * 1.5 * 72;
    const productPrice = product.price * 72;
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
