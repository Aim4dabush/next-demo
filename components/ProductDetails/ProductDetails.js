import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

//components
import Button from "../Button/Button";

//redux
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Redux/slices/CartSlice";
import { productsActions } from "../../Redux/slices/ProductsSlice";

//styles
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const quantity = useRef();
  const router = useRouter();
  const products = useSelector((state) => state.products.products);
  const product = useSelector((state) => state.products.product);
  const linkPath = "/products";

  const addCartHandler = () => {
    const subtotal = product.price * parseInt(quantity.current.value);

    dispatch(
      cartActions.setCart({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: parseInt(quantity.current.value),
        subtotal: subtotal,
      })
    );
  };

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
          </div>
          <div className={styles.info}>
            <p>Price: ${product?.price}</p>
            <div>
              <label htmlFor="quantity">Quantity</label>
              <input
                className={styles.input}
                type="number"
                id="quantity"
                ref={quantity}
                defaultValue="1"
              />
            </div>
          </div>
          <div className={styles.buttons}>
            <Button clickHandler={addCartHandler}>
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
