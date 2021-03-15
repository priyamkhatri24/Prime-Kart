export const LOAD_PRODUCTS = "LOAD_PRODUCTS";

export const loadProducts = () => {
  return (dispatch) => {
    axios.get("https://fakestoreapi.com/products").then((res) => res.json());
    dispatch({ type: LOAD_PRODUCTS, products: products });
  };
};
