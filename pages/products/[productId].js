import { useRouter } from "next/router";

const ProductDetailsPage = () => {
  const router = useRouter();

  console.log(router.query.productId);

  return <div>Product Detail Page</div>;
};

export default ProductDetailsPage;
