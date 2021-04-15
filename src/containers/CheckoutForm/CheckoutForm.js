import classes from "./CheckoutForm.module.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../../UI/Modal/Modal";
import Spinner from "../../UI/Spinner/Spinner";
import * as actionTypes from "../../store/Actions/Actions";

class CheckoutForm extends Component {
  state = {
    showLoader: false,
    isFormValid: true,
    form: {
      name: {
        type: "text",
        placeholder: "Name",
        value: "",
        name: "name",
        isValid: function () {
          return this.value.length > 0 ? true : false;
        },
      },
      mobile: {
        type: "text",
        placeholder: "10-digit mobile number",
        value: "",
        name: "mobile",
        isValid: function () {
          const nanCheck = !isNaN(this.value);
          return nanCheck && this.value.length > 0;
        },
      },
      pincode: {
        type: "text",
        placeholder: "Pincode",
        value: "",
        name: "pincode",
        isValid: function () {
          const nanCheck = !isNaN(this.value);
          if (nanCheck && this.value.length === 6) return true;
          else return false;
        },
      },
      address: {
        type: "text",
        placeholder: "Address",
        value: "",
        name: "address",
        isValid: function () {
          return this.value.length > 0;
        },
      },
      city: {
        type: "text",
        placeholder: "City/town",
        value: "",
        name: "city",
        isValid: function () {
          return this.value.length > 0;
        },
      },
    },
  };

  formDataHandler = (e) => {
    const data = {};
    const updatedForm = { ...this.state.form };
    updatedForm[e.target.name].value = e.target.value;
    this.setState({ form: updatedForm });
    const formAttributes = Object.keys(this.state.form);
    formAttributes.forEach((ele) => {
      data[ele] = updatedForm[ele].value;
    });
    this.props.formEdit(data);
  };

  formSubmitHandler = (e) => {
    e.preventDefault();
    const formAttributes = Object.keys(this.state.form);
    const formObject = { ...this.state.form };
    const validation = formAttributes.every((ele) => {
      return formObject[ele].isValid();
    });
    if (validation) {
      this.setState({ showLoader: true });
      this.props.placeOrder(
        this.props.cart,
        this.props.customer,
        this.props.totalPrice
      );
    } else {
      this.setState({ isFormValid: false });
    }
  };

  redirectToHomeHandler = () => {
    this.setState({ showOrderPlacedModal: false, showLoader: false });
    this.props.closeOrderPlacedModal();
    this.props.history.replace("/");
  };

  render() {
    const formAttributes = Object.keys(this.state.form);
    const formObject = { ...this.state.form };
    const form = formAttributes.map((ele) => {
      const valid = formObject[ele].isValid() || this.state.isFormValid;
      let inputClass;
      if (valid) {
        inputClass = [classes.formInput, classes.correct];
      }
      if (!valid) {
        inputClass = [classes.formInput, classes.incorrect];
      }
      return (
        <div key={formObject[ele].placeholder} style={{ display: "flex" }}>
          <input
            className={inputClass.join(" ")}
            type={formObject[ele].type}
            placeholder={formObject[ele].placeholder}
            value={formObject[ele].value}
            name={formObject[ele].name}
            onChange={this.formDataHandler}
          ></input>
          {valid ? null : (
            <p className={classes.invalidFormData}>Invalid form data!</p>
          )}
        </div>
      );
    });
    return (
      <div className={classes.formContainer}>
        {this.state.showLoader ? <Spinner width="1rem" height="1rem" /> : null}
        <Modal height="120px" show={this.props.showOrderPlacedModal}>
          <div className={classes.modalContent}>
            <h2 className={classes.successText}>
              Your order has been placed Successfully
            </h2>
            <button
              onClick={this.redirectToHomeHandler}
              className={classes.modalCloseBtn}
            >
              OK
            </button>
          </div>
        </Modal>
        <h1 className={classes.heading}>Customer details</h1>
        <form className={classes.checkoutForm}>
          {form}
          <button
            onClick={this.formSubmitHandler}
            className={classes.placeOrderBtn}
          >
            Place Order
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
    customer: state.cartReducer.customer,
    totalPrice: state.cartReducer.totalPrice,
    showOrderPlacedModal: state.cartReducer.showOrderPlacedModal,
  };
};
const mapActionsToProps = (dispatch) => {
  return {
    formEdit: (data) => dispatch(actionTypes.formEdit(data)),
    placeOrder: (products, customer, totalPrice) =>
      dispatch(actionTypes.placeOrder(products, customer, totalPrice)),
    closeOrderPlacedModal: () => dispatch(actionTypes.closeOrderPlacedModal()),
  };
};
export default connect(mapStateToProps, mapActionsToProps)(CheckoutForm);
