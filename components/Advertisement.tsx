import React from "react";
import style from "./Advertisement.module.scss";

const Advertisement = (props) => (
  <div className={`${style.container} common-box`}>
    <div><img src="http://blogimages.jspang.com/flutter_ad2.jpg" width="100%" /></div>
    <div><img src="http://blogimages.jspang.com/Vue_koa_ad1.jpg" width="100%" /></div>
    <div><img src="http://blogimages.jspang.com/WechatIMG12.jpeg" width="100%" /></div>
  </div>
);

export default Advertisement;
