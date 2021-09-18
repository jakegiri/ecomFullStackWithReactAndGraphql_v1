import NProgress from "nprogress";
import Router from "next/router";
import { ApolloProvider } from "@apollo/client";

import Layout from "../components/Layout";
import { useApollo } from "../lib/apollo/apolloClient";
import { CartProvider } from "../lib/context/cartState";

import "../styles/globals.css";
import "../styles/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </ApolloProvider>
  );
}

export default MyApp;
