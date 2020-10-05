import React from "react";
import { Affix, Breadcrumb, Col, Row } from "antd";
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
import ReactMarkdown from "react-markdown";
import MarkdownNavbar from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";
import styles from "./index.scss";

const Index: React.FC = () => {
  const markdown =
    "# P01:课程介绍和环境搭建\n" +
    "[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n" +
    "> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n" +
    "**这是加粗的文字**\n\n" +
    "*这是倾斜的文字*`\n\n" +
    "***这是斜体加粗的文字***\n\n" +
    "~~这是加删除线的文字~~ \n\n" +
    "`console.log(111)` \n\n" +
    "# p02:来个Hello World 初始Vue3.0\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n" +
    "***\n\n\n" +
    "# p03:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p04:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "#5 p05:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p06:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p07:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "``` var a=11; ```";
  return (
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
              </div>
              <div className="content">
                <ReactMarkdown source={markdown} escapeHtml={false} />
              </div>
            </div>
          </Col>
          <Col className={styles.right} xs={0} sm={0} md={7} lg={5} xl={4}>
            <ProfileComponent />
            <AdvertisementComponent />
            <Affix offsetTop={5}>
              <div className={`${styles.detailNav} common-box`}>
                <div className={styles.navTitle}>文章目录</div>
                <MarkdownNavbar
                  className="article-menu"
                  source={markdown}
                  ordered={false}
                />
              </div>
            </Affix>
          </Col>
        </Row>
        <FooterComponent />
      </div>
    </>
  );
};

export default Index;
