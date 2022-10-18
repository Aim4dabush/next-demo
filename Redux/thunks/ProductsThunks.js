import { productsActions } from "../slices/ProductsSlice";

export const getProducts = () => {
  return async (dispatch) => {
    //get products from store api
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    //check to see if there is data
    if (!data) {
      return;
    }

    //save data to state management
    dispatch(productsActions.setProducts(data));
  };
};
