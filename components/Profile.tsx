import React from "react";
import style from "./Profile.module.scss";
import { Avatar, Col, Divider, Row, Tag } from "antd";
import { GithubOutlined, QqOutlined, TwitterOutlined, WechatOutlined, YoutubeOutlined } from "@ant-design/icons";

const Profile: React.FC = (props) => (
  <div className={style.container}>
    <div className={style.logo}>
      <Avatar shape="circle" size={100} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    </div>
    <div className={style.introduction}>
      光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
      <Divider>社交账号</Divider>
      <Avatar size={28} icon={<GithubOutlined />} className={style.account} />
      <Avatar size={28} icon={<QqOutlined />} className={style.account}/>
      <Avatar size={28} icon={<WechatOutlined />} className={style.account} />
    </div>
  </div>
);

export default Profile;
