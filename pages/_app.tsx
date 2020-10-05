import "antd/dist/antd.less";
import "@styles/globals.scss";
import React from "react";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} style={{ height: "100%" }} />;
}

export default MyApp;
