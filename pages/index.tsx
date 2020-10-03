import Head from "next/head";
import styles from "./index.module.scss";
import React from "react";
import Header from "../components/Header";
import { Col, Row } from "antd";

const Home: React.FC<null> = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <Header />
        <Row justify="center" className={styles.main}>
          <Col className={styles.left} xs={24} sm={24} md={16} lg={18} xl={14}>
            left
          </Col>
          <Col className={styles.right} xs={0} sm={0} md={7} lg={5} xl={4}>
            right
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
