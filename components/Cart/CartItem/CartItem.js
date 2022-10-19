//styles
import styles from "./CartItem.module.css";

const CartItem = ({ title, image, price, quantity }) => {
  return (
    <li className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.content}>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <p>Price: ${price}</p>
        </div>
        <div>
          <p>Quantity: {quantity}</p>
        </div>
        <div>
          <p>Subtotal: ${quantity * price}</p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
