import * as React from "react";
import App from "next/app";
import Header from "./../components/Header";

import 'antd/dist/antd.css'
import "./../styles/style.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Header />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
