//components
import ProductItem from "../ProductItem/ProductItem";

//styles
import styles from "./ProductsList.module.css";

const ProductsList = ({ products }) => {
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
