//components
import Button from "../../../Button/Button";

//redux
import { useDispatch } from "react-redux";
import { notificationActions } from "../../../../Redux/slices/NotificationSlice";

//styles
import styles from "./Modal.module.css";

const Modal = () => {
  const dispatch = useDispatch();
  const cartPath = "/cart";
  const productsPath = "/products";

  const detailsModalHandler = () => {
    dispatch(notificationActions.setShowDetailsModal(false));
  };

  return (
    <div className={styles.container}>
      <p>Would you like to go to the cart or keep shopping?</p>
      <div className={styles.buttonWrapper}>
        <Button link={cartPath} clickHandler={detailsModalHandler}>
          <p>Go To Cart</p>
        </Button>
        <Button link={productsPath} clickHandler={detailsModalHandler}>
          <p>Keep Shopping</p>
        </Button>
      </div>
    </div>
  );
};

export default Modal;
