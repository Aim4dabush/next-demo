//components
import CheckoutModal from "../components/Modal/CheckoutModal/CheckoutModal";
import DetailsModal from "../components/Modal/DetailsModal/DetailsModal";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

//redux
import store from "../Redux/store";
import { Provider } from "react-redux";

//styles
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>Fake API Store</title>
          <meta name="description" content="store products" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <CheckoutModal />
        <DetailsModal />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
