import { useEffect } from "react";

//components
import ProductItem from "../ProductItem/ProductItem";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../Redux/thunks/ProductsThunks";

//styles
import styles from "./ProductsList.module.css";

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  //get products from thunk
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <ul className={styles.list}>
      {products &&
        products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            category={product.category}
          />
        ))}
    </ul>
  );
};

export default ProductsList;
