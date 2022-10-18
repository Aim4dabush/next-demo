//components
import Button from "../../Button/Button";

//styles
import styles from "./ProductItem.module.css";

const ProductItem = ({ id, title, image, price, category }) => {
  const linkPath = `/products/${id}`;
  return (
    <li className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.content}>
        <div>
          <h3>{title}</h3>
        </div>
        <div className={styles.details}>
          <h5>{category}</h5>
          <p>${price}</p>
        </div>
        <Button link={linkPath}>
          <p>More Details</p>
        </Button>
      </div>
    </li>
  );
};

export default ProductItem;
