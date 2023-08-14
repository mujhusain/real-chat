import React, { useContext, useState } from "react";
import cam from "../img/cam.png";
import add_user from "../img/add_user.png";
import more from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContextProvider";
import RightSidebar from "./RightSidebar";

const Chat = (props) => {
  const { data } = useContext(ChatContext);
  const [visible, setVisible]=useState(false);
  return (
    <>
    <div className="chat">
      <div className="chatInfo">
        <div className="userInfo">
        <img src={data.user.photoURL} alt="" />
        <span>{data.user?.displayName}</span>
        </div>
        <div className="otherFeaters">
          <img src={cam} alt="Camera" />
          <img src={more} alt="more" />
          <img src={add_user} alt="Add" onClick={()=>setVisible(prev=>!prev)}  />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
    {visible && <RightSidebar />}
    </>
  );
};

export default Chat;
