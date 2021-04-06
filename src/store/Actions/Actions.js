export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const PRODUCT_CLICKED = "PRODUCT_CLICKED";

export const loadProducts = () => {
  console.log("loadProducts action started");
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
