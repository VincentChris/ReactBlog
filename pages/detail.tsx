import React from "react";
import styles from "./detail.scss";
import Header from "../components/Header";
import { Col, Row } from "antd";

const Detail = (props) => (
  <div className={styles.container}>
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
);

export default Detail;
