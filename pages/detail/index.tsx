import React from "react";
import { Breadcrumb, Col, Row } from "antd";
import HeaderComponent from "@components/Header/Header.component";
import Head from "next/head";
import {
  CalendarOutlined,
  FireOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import ProfileComponent from "@components/Profile/Profile.component";
import AdvertisementComponent from "@components/Advertisement/Advertisement.component";
import FooterComponent from "@components/Footer/Footer.component";
import styles from "./index.scss";

const Index = () => (
  <>
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <HeaderComponent />
      <Row justify="center" className={styles.main}>
        <Col className={styles.left} xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="bread-container">
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">首页</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>视频列表</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className={styles.detail}>
            <div className={styles.title}>
              React实战视频教程-技术胖Blog开发(更新08集)
            </div>
            <div className="list-icon center">
              <span>
                <CalendarOutlined />
                2020-10-04
              </span>
              <span>
                <FolderOutlined />
                视频教程
              </span>
              <span>
                <FireOutlined />
                5498人
              </span>
              <div className="content">详细内容，下节课编写</div>
            </div>
          </div>
        </Col>
        <Col className={styles.right} xs={0} sm={0} md={7} lg={5} xl={4}>
          <ProfileComponent />
          <AdvertisementComponent />
        </Col>
      </Row>
      <FooterComponent />
    </div>
  </>
);

export default Index;
