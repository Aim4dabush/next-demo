import { Fragment } from "react";
import ReactDOM from "react-dom";

//components
import Modal from "./Modal/Modal";
import Overlay from "./Overlay/Overlay";

//redux
import { useSelector } from "react-redux";

const CheckoutModal = () => {
  const show = useSelector((state) => state.notification.showCheckoutModal);

  return (
    <Fragment>
      {show &&
        ReactDOM.createPortal(
          <Overlay />,
          document.getElementById("overlay-root")
        )}
      {show &&
        ReactDOM.createPortal(
          <Modal />,
          document.getElementById("checkout-root")
        )}
    </Fragment>
  );
};

export default CheckoutModal;
