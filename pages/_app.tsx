import "antd/dist/antd.less";
import "@styles/globals.scss";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} style={{ height: "100%" }} />
      <style global jsx>{"#__next{height:100%}"}</style>
    </>
  );
}

export default MyApp;
