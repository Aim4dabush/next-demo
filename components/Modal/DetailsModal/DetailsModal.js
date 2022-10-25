import { Fragment } from "react";
import ReactDOM from "react-dom";

//components
import Modal from "./Modal/Modal";
import Overlay from "./Overlay/Overlay";

//redux
import { useSelector } from "react-redux";

const DetailsModal = () => {
  const show = useSelector((state) => state.notification.showDetailsModal);

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
          document.getElementById("details-root")
        )}
    </Fragment>
  );
};

export default DetailsModal;
