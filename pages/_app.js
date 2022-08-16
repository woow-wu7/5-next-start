// import { Provider } from "react-redux";
// import { store } from "../store/store";
import { wrapper } from "../store/store";
import App from "next/app";
import { addAsync } from "../store/counter";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) => async (context) => {
    await store.dispatch(addAsync(100));

    return {
      pageProps: {
        ...(await App.getInitialProps(context)).pageProps,
        pathname: context.ctx.pathname,
      },
    };
  }
);

export default wrapper.withRedux(MyApp);
