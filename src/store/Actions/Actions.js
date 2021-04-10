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

export const loadProducts = () => {
  return (dispatch) => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        dispatch({ type: LOAD_PRODUCTS, products: products });
      });
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
