import React from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/7QClKM2i8E8/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDRj7nbUP6lPQSa62RZhuv00PYpHg"
          alt=""
        />
        <span>05:43</span>
      </div>
      <div className="video__title">Create app in 5 min</div>
      <div className="video__details">
        <span>
          <AiFillEye />
        </span>
        <span>5M Views •</span>
        <span>5 days Ago</span>
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/mw5amBP49SqVDUr1wCgcGsaq2Yvn…qRVgJSMYW5cJnyuDLdh3tIo=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <p>Rainbow Hat Jr</p>
      </div>
    </div>
  );
};

export default Video;
