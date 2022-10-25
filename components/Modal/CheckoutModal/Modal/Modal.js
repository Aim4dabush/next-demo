import { useRouter } from "next/router";

//components
import Button from "../../../Button/Button";

//redux
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../../Redux/slices/CartSlice";
import { notificationActions } from "../../../../Redux/slices/NotificationSlice";
import { orderActions } from "../../../../Redux/slices/OrderSlice";

//styles
import styles from "./Modal.module.css";

const Modal = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.customerOrder);
  const productsPath = "/products";

  const checkoutModalHandler = () => {
    dispatch(orderActions.setClearOrder());
    dispatch(cartActions.setClearCart());
    dispatch(notificationActions.setShowCheckoutModal(false));
  };

  return (
    <div className={styles.container}>
      <h2>Thank You {order.fName + " " + order.lName}</h2>
      <p>Your account will be charged ${order.total}</p>
      <p>
        The order will be sent to {order.address}. Please contact us if you wish
        to change the address.
      </p>
      <Button link={productsPath} clickHandler={checkoutModalHandler}>
        <p>Back To Products</p>
      </Button>
    </div>
  );
};

export default Modal;
