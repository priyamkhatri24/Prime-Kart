import axios from "axios";
export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const PRODUCT_CLICKED = "PRODUCT_CLICKED";
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
export const FETCH_ORDERS = "FETCH_ORDERS";
export const OPEN_SIDE_DRAWER = "OPEN_SIDE_DRAWER";

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

export const querySubmit = (query) => {
  return {
    type: QUERY_SUBMIT,
    query: query,
  };
};

export const fetchByCategories = (query) => {
  return (dispatch) => {
    // dispatch({ type: SPINNER_INIT });
    const lowerCaseQuery = query.toLowerCase();
    fetch(`https://fakestoreapi.com/products/category/${lowerCaseQuery}`)
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
export const placeOrder = (products, customer, totalPrice, userID) => {
  const date = new Date();
  console.log(products);
  for (let keys of products) {
    keys.orderPlacedOn = date.toLocaleString();
  }
  const data = {
    products: products,
    customer: customer,
    amount: totalPrice,
    userID: userID,
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

export const openSideDrawerHandler = () => {
  return {
    type: OPEN_SIDE_DRAWER,
  };
};

export const fetchOrders = (userID) => {
  return (dispatch) => {
    fetch(
      `https://prime-kart-default-rtdb.firebaseio.com/order.json?orderBy="userID"&equalTo="${userID}"`
    )
      .then((res) => res.json())
      .then((data) => dispatch({ type: FETCH_ORDERS, orders: data }))
      .catch((err) => alert("Something went wrong"));
  };
};
