export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const PRODUCT_CLICKED = "PRODUCT_CLICKED";
export const LOGIN_CLICKED = "LOGIN_CLICKED";
export const CANCEL_MODAL = "CANCEL_MODAL";
export const QUERY_SUBMIT = "QUERY_SUBMIT";
export const FETCH_BY_CATEGORIES = "FETCH_BY_CATEGORIES";

export const loadProducts = () => {
  return (dispatch) => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        console.log("dispatching action");
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
    fetch(`https://fakestoreapi.com/products/category/${query}`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: FETCH_BY_CATEGORIES, data: data }));
  };
};
