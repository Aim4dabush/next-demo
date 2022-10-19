import { Fragment, useEffect } from "react";

//components
import ProductsList from "../../components/Products/ProductsList/ProductsList";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../Redux/thunks/ProductsThunks";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  //get products from thunk
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Fragment>
      <ProductsList products={products} />
    </Fragment>
  );
};

export default ProductsPage;
