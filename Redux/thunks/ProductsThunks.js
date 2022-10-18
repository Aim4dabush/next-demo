import { productsActions } from "../slices/ProductsSlice";

export const getProducts = () => {
  return async (dispatch) => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    if (!data) {
      return;
    }

    dispatch(productsActions.setProducts(data));
  };
};
