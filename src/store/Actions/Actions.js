export const LOAD_PRODUCTS = "LOAD_PRODUCTS";

export const loadProducts = () => {
  console.log('loadProducts action started')
  return (dispatch) => {
    fetch("https://fakestoreapi.com/products").then((res) => res.json()).then(products => {
      console.log('dispatching action')
      dispatch({type: LOAD_PRODUCTS, products: products})
    });
    
  };
};
