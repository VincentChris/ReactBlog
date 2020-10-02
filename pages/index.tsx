import Head from "next/head";
import styles from "@styles/Home.module.less";
import React from "react";
import { Button } from "antd";

const Home: React.FC<null> = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button>测试</Button>
    </div>
  );
};

export default Home;
