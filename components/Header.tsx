import React, { FC } from "react";
import Style from "./Header.module.scss";
import { Col, Menu, Row } from "antd";
import {
  HomeOutlined,
  SmileOutlined,
  YoutubeOutlined
} from "@ant-design/icons";

const Header: FC = () => (
  <div className={Style.header}>
    <Row justify="center">
      <Col xs={24} sm={24} md={10} lg={15} xl={12}>
        <span className={Style.headerLogo}>
          雁城慕容复
        </span>
        <span className={Style.headerTxt}>
          前端菜鸟，正在学习React
        </span>
      </Col>
      <Col xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode={"horizontal"}>
          <Menu.Item key={"home"}>
            <HomeOutlined />
            首页
          </Menu.Item>
          <Menu.Item key={"video"}>
            <YoutubeOutlined />
            视频
          </Menu.Item>
          <Menu.Item key={"lifo"}>
            <SmileOutlined />
            生活
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
);

export default Header;


