//redux
import store from "../Redux/store";
import { Provider } from "react-redux";

//styles
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
