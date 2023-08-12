import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { ChatContext } from "../context/ChatContextProvider";

const Message = ({ img, text, senderId, date }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [img, text, senderId, date]);

  const formatChatTime=({seconds, nanoseconds}) =>{
    const messageTime = new Date(seconds * 1000 + nanoseconds / 1000000); // Convert to milliseconds
    const currentTime = new Date().getTime(); // Get current time in milliseconds
    const timeDifference = currentTime - messageTime.getTime();

    if (timeDifference < 1000) { // Less than a second
        return "just now";
    } else if (timeDifference < 60 * 1000) { // Less than a minute
        return `${Math.floor(timeDifference / 1000)} sec ago`;
    } else if (timeDifference < 60 * 60 * 1000) { // Less than an hour
        return `${Math.floor(timeDifference / (60 * 1000))} min ago`;
    } else if (timeDifference < 24 * 60 * 60 * 1000) { // Less than a day
        return `${Math.floor(timeDifference / (60 * 60 * 1000))} hours ago`;
    } else {
        const formattedTime = messageTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return formattedTime;
    }
}

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
        <span>{formatChatTime(date)}</span>
      </div>
      <div className="messageContent">
        <p>{text}</p>
        {img && <img src={img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
