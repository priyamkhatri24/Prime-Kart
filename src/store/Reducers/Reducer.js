import * as actionTypes from "../Actions/Actions";

const initialState = {
  products: [],
  clickedProduct: {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  showLoginModal: false,
  searchQuery: "",
  byCategory: null,
  cart: [],
};

const loadProducts = (state, action) => {
  return {
    ...state,
    products: [...action.products],
  };
};

const productClicked = (state, action) => {
  return {
    ...state,
    clickedProduct: action.product,
  };
};

const loginClicked = (state, action) => {
  return {
    ...state,
    showLoginModal: !state.showLoginModal,
  };
};

const cancelModal = (state, action) => {
  return {
    ...state,
    showLoginModal: false,
  };
};

const querySubmit = (state, action) => {
  return {
    ...state,
    searchQuery: action.query,
  };
};

const fetchByCategories = (state, action) => {
  return {
    ...state,
    byCategory: action.data,
  };
};

const spinnerInit = (state) => {
  return {
    ...state,
    byCategory: null,
  };
};

const addToCart = (state, action) => {
  const updatedCart = [...state.cart];
  if (updatedCart.some((ele) => ele.id === action.product.id)) {
    return state;
  }
  updatedCart.unshift(action.product);
  return {
    ...state,
    cart: updatedCart,
  };
};

const removeProduct = (state, action) => {
  const oldCart = [...state.cart];
  const updatedCart = oldCart.filter((ele) => ele.id !== action.product.id);
  return {
    ...state,
    cart: updatedCart,
  };
};

const increment = (state, action) => {
  const updatedCart = [...state.cart];
  const productIndex = updatedCart.findIndex((ele) => ele.id === action.id);
  updatedCart[productIndex].specs.qty += 1;
  return {
    ...state,
    cart: updatedCart,
  };
};
const decrement = (state, action) => {
  const updatedCart = [...state.cart];
  const productIndex = updatedCart.findIndex((ele) => ele.id === action.id);
  if (updatedCart[productIndex].specs.qty === 1) {
    return state;
  }
  updatedCart[productIndex].specs.qty -= 1;

  return {
    ...state,
    cart: updatedCart,
  };
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return loadProducts(state, action);
    case actionTypes.PRODUCT_CLICKED:
      return productClicked(state, action);
    case actionTypes.LOGIN_CLICKED:
      return loginClicked(state, action);
    case actionTypes.CANCEL_MODAL:
      return cancelModal(state, action);
    case actionTypes.QUERY_SUBMIT:
      return querySubmit(state, action);
    case actionTypes.FETCH_BY_CATEGORIES:
      return fetchByCategories(state, action);
    case actionTypes.SPINNER_INIT:
      return spinnerInit(state);
    case actionTypes.ADD_TO_CART:
      return addToCart(state, action);
    case actionTypes.REMOVE_PRODUCT:
      return removeProduct(state, action);
    case actionTypes.INCREMENT:
      return increment(state, action);
    case actionTypes.DECREMENT:
      return decrement(state, action);
    default:
      return state;
  }
};
