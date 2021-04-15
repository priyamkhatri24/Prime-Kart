import axios from "axios";
export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const PRODUCT_CLICKED = "PRODUCT_CLICKED";
export const LOGIN_CLICKED = "LOGIN_CLICKED";
export const CANCEL_MODAL = "CANCEL_MODAL";
export const QUERY_SUBMIT = "QUERY_SUBMIT";
export const FETCH_BY_CATEGORIES = "FETCH_BY_CATEGORIES";
export const SPINNER_INIT = "SPINNER_INIT";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const UPDATE_PRICE = "UPDATE_PRICE";
export const FORM_EDIT = "FORM_EDIT";
export const PLACE_ORDER = "PLACE_ORDER";
export const CLOSE_ORDER_PLACED_MODAL = "CLOSE_ORDER_PLACED_MODAL";
export const LOGIN = "LOGIN";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILED = "SIGNUP_FAILED";

export const loadProducts = () => {
  return (dispatch) => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        dispatch({ type: LOAD_PRODUCTS, products: products });
      })
      .catch((err) => alert("Something went wrong"));
  };
};

export const productClicked = (product) => {
  return {
    type: PRODUCT_CLICKED,
    product: product,
  };
};

export const loginClicked = () => {
  return {
    type: LOGIN_CLICKED,
  };
};

export const cancelModalHandler = () => {
  return {
    type: CANCEL_MODAL,
  };
};

export const querySubmit = (query) => {
  return {
    type: QUERY_SUBMIT,
    query: query,
  };
};

export const fetchByCategories = (query) => {
  return (dispatch) => {
    // dispatch({ type: SPINNER_INIT });
    fetch(`https://fakestoreapi.com/products/category/${query}`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: FETCH_BY_CATEGORIES, data: data }))
      .catch((err) => alert("something went wrong"));
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product: product,
  };
};

export const removeProduct = (product) => {
  return {
    type: REMOVE_PRODUCT,
    product: product,
  };
};

export const qtyIncrement = (id) => {
  return {
    type: INCREMENT,
    id: id,
  };
};
export const qtyDecrement = (id) => {
  return {
    type: DECREMENT,
    id: id,
  };
};

export const updateTotalPrice = (totalPrice) => {
  return {
    type: UPDATE_PRICE,
    totalPrice: totalPrice,
  };
};

export const formEdit = (data) => {
  return {
    type: FORM_EDIT,
    data: data,
  };
};

export const placeOrder = (products, customer, totalPrice) => {
  const data = {
    products: products,
    customer: customer,
    amount: totalPrice,
  };
  return (dispatch) => {
    axios
      .post("https://prime-kart-default-rtdb.firebaseio.com/order.json", data)
      .then((res) => {
        dispatch({ type: PLACE_ORDER });
      })
      .catch((err) =>
        alert("Something went wrong. Please try reloading the site")
      );
  };
};

export const closeOrderPlacedModal = () => {
  return {
    type: CLOSE_ORDER_PLACED_MODAL,
  };
};

export const loginHandler = () => {
  return {
    type: LOGIN,
  };
};

const signupSuccess = (res) => {
  return {
    type: SIGNUP_SUCCESS,
    response: res,
  };
};

const signupFailed = (err) => {
  return {
    type: SIGNUP_FAILED,
    error: err.response.data.error,
  };
};

export const signupHanlder = (email, password) => {
  return (dispatch) => {
    const payload = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    console.log(payload);
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBPV6R-sNmVqArSK3oMgzFbHcKs29ZZsEI",
        payload
      )
      .then((res) => {
        dispatch(signupSuccess(res));
      })
      .catch((err) => dispatch(signupFailed(err)));
  };
};
