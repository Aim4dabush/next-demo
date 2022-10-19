import { Fragment, useEffect } from "react";

//components
import ProductsList from "../../components/Products/ProductsList/ProductsList";

//redux
import { useDispatch } from "react-redux";
import { getProducts } from "../../Redux/thunks/ProductsThunks";

const ProductsPage = () => {
  const dispatch = useDispatch();

  //get products from thunk
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Fragment>
      <ProductsList />
    </Fragment>
  );
};

export default ProductsPage;
