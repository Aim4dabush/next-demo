import { Fragment } from "react";

//components
import Checkout from "../../components/Checkout/Checkout";
import Head from "next/head";

const CheckoutPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Checkout out your order and ship" />
      </Head>
      <Checkout />
    </Fragment>
  );
};

export default CheckoutPage;
