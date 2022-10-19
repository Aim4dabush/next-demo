//component
import CartItem from "../CartItem/CartItem";

//redux
import { useSelector } from "react-redux";

const CartList = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <ul>
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
  );
};

export default CartList;
