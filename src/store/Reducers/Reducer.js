import * as actionTypes from "../Actions/Actions";

const initialState = {
  products: [],
};

const loadProducts = (state, action) => {
  console.log('reducer')
  return {
    ...state,
    products: [...action.products]
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS: return loadProducts(state,action)
    default: return state
  }
};
