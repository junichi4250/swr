import "../styles/globals.css";
import type { AppProps } from "next/app";
import ContextProvider from "../lib/context";
import Layout from "../components/common/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ContextProvider>
);

export default MyApp;
