import React from "react";
import { Avatar, Divider } from "antd";
import { GithubOutlined, QqOutlined, WechatOutlined } from "@ant-design/icons";
import style from "./Profile.component.scss";

const ProfileComponent: React.FC = () => (
  <div className={style.container}>
    <div className={style.logo}>
      <Avatar
        shape="circle"
        size={100}
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
    </div>
    <div className={style.introduction}>
      光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
      <Divider>社交账号</Divider>
      <Avatar size={28} icon={<GithubOutlined />} className={style.account} />
      <Avatar size={28} icon={<QqOutlined />} className={style.account} />
      <Avatar size={28} icon={<WechatOutlined />} className={style.account} />
    </div>
  </div>
);

export default ProfileComponent;
