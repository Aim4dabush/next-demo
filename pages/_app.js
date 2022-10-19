//components
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
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
