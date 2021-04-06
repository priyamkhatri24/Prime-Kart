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

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return loadProducts(state, action);
    case actionTypes.PRODUCT_CLICKED:
      return productClicked(state, action);
    default:
      return state;
  }
};
