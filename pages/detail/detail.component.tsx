import React from "react";
import { Col, Row } from "antd";
import HeaderComponent from "@components/Header/Header.component";
import styles from "./detail.component.scss";

const DetailComponent = () => (
  <div className={styles.container}>
    <HeaderComponent />
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

export default DetailComponent;
