import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { ChatContext } from "../context/ChatContextProvider";

const Message = ({ img, text, senderId, date }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();

  useEffect(() => {
    console.log("date", date);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [img, text, senderId, date]);
  return (
    <div
      ref={ref}
      className={`message ${senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        {/* <span>{date}</span> */}
      </div>
      <div className="messageContent">
        <p>{text}</p>
        {img && <img src={img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
