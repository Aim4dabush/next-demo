//component
import Button from "../../Button/Button";
import CartItem from "../CartItem/CartItem";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./CartList.module.css";

const CartList = () => {
  const cart = useSelector((state) => state.cart.cart);
  const checkoutPath = "/checkout";

  return (
    <div>
      <div className={styles.wrapper}>
        <Button link={checkoutPath}>
          <p className={styles.button}>Go to Checkout</p>
        </Button>
      </div>
      <ul className={styles.list}>
        {cart &&
          cart.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default CartList;
