//components
import ProductItem from "../ProductItem/ProductItem";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./ProductsList.module.css";

const ProductsList = () => {
  const products = useSelector((state) => state.products.products);

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
