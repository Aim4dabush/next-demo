import { Fragment } from "react";

//components
import CartList from "../../components/Cart/CartList/CartList";
import Head from "next/head";

const CartPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Cart</title>
        <meta name="description" content="See what you have in your cart" />
      </Head>
      <CartList />
    </Fragment>
  );
};

export default CartPage;
