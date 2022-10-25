import { Fragment, useEffect } from "react";

//components
import ProductDetails from "../../components/ProductDetails/ProductDetails";

//redux
// import { useDispatch } from "react-redux";
// import { productsActions } from "../../Redux/slices/ProductsSlice";

//utils
import { getProductById, getProducts } from "../../utils/utils";

const ProductDetailsPage = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(productsActions.setProduct(product));
  // }, []);

  return (
    <Fragment>
      <ProductDetails />
    </Fragment>
  );
};

// export const getStaticProps = async (context) => {
//   const id = parseInt(context.params.productId);

//   const product = await getProductById(id);

//   return {
//     props: {
//       product: product,
//     },
//     revalidate: 30,
//   };
// };

// export const getStaticPaths = async () => {
//   const products = await getProducts();

//   const paths = products.map((product) => ({
//     params: {
//       productId: product.id.toString(),
//     },
//   }));

//   return {
//     paths: paths,
//     fallback: "blocking",
//   };
// };

export default ProductDetailsPage;
