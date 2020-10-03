import Head from "next/head";
import styles from "./index.module.scss";
import React from "react";
import Header from "../components/Header";

const Home: React.FC<null> = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
      </div>
    </>
  );
};

export default Home;
