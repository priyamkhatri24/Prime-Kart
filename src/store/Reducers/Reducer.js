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
  byCategory: [],
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
    default:
      return state;
  }
};
