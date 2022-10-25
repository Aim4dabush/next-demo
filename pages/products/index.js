import { Fragment, useEffect } from "react";

//components
import Head from "next/head";
import ProductsList from "../../components/Products/ProductsList/ProductsList";

//redux
import { useDispatch } from "react-redux";
// import { getProducts } from "../../Redux/thunks/ProductsThunks";
import { productsActions } from "../../Redux/slices/ProductsSlice";

//utils
import { getProducts } from "../../utils/utils";

const ProductsPage = ({ products }) => {
  const dispatch = useDispatch();

  //get products from thunk
  useEffect(() => {
    // dispatch(getProducts());
    dispatch(productsActions.setProducts(products));
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Products</title>
        <meta
          name="description"
          content="find all the products for the store"
        />
      </Head>
      <ProductsList />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  //get products from api store
  const products = await getProducts();

  if (products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: products,
    },
    revalidate: 60,
  };
};

export default ProductsPage;
