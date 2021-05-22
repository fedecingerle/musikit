import React from "react";
import "../styles/globals.css";
import Head from "../components/Head";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
