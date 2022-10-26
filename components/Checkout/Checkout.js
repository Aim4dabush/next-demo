import { useRef } from "react";

//components
import Button from "../Button/Button";

//redux
import { useDispatch, useSelector } from "react-redux";
import { notificationActions } from "../../Redux/slices/NotificationSlice";
import { orderActions } from "../../Redux/slices/OrderSlice";

//styles
import styles from "./Checkout.module.css";

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const address = useRef();
  const fName = useRef();
  const lName = useRef();

  let total = 0;

  if (cart.length > 1) {
    total = cart.reduce((a, b) => a.subtotal + b.subtotal);
  } else {
    total = cart[0].subtotal;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const enteredFName = fName.current.value;
    const enteredLName = lName.current.value;
    const enteredAddress = address.current.value;

    const reqBody = {
      fName: enteredFName,
      lName: enteredLName,
      address: enteredAddress,
      total: total,
    };

    dispatch(orderActions.setCustomerOrder(reqBody));

    fetch("/api/order", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    dispatch(notificationActions.setShowCheckoutModal(true));
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <h2>Checkout Form</h2>
        <div className={styles.names}>
          <div className={styles.control}>
            <label htmlFor="fName">First Name</label>
            <input
              className={styles.inputName}
              id="fName"
              ref={fName}
              type="text"
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="lName">Last Name</label>
            <input
              className={styles.inputName}
              id="lName"
              ref={lName}
              type="text"
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input
            className={styles.inputAddress}
            id="address"
            ref={address}
            type="text"
          />
        </div>
        <div className={styles.wrapper}>
          <p>Total: ${total}</p>
          <button className={styles.button}>Submit Order</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
