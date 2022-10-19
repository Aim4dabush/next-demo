import { useEffect } from "react";
import { useRouter } from "next/router";

//components
import Button from "../Button/Button";

//redux
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../../Redux/slices/ProductsSlice";

//styles
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const products = useSelector((state) => state.products.products);
  const product = useSelector((state) => state.products.product);

  const linkPath = "/products";
  console.log(product);

  useEffect(() => {
    const item = products.find((product) => {
      return product.id.toString() === router.query.productId;
    });

    dispatch(productsActions.setProduct(item));
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <img src={product?.image} alt={product?.title} />
        <div className={styles.content}>
          <h3>{product?.title}</h3>
          <p>{product?.description}</p>
          <div className={styles.info}>
            <p>{product?.category}</p>
            <p>Rating: {product?.rating.rate}</p>
            <p>Price: ${product?.price}</p>
          </div>
          <div className={styles.buttons}>
            <Button>
              <p>Add To Cart</p>
            </Button>
            <Button link={linkPath}>
              <p>Return To Products Page</p>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
