import React, { useEffect, useState } from "react";

const Chats = (props) => {
  const [chats,setChats]=useState([]);

  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://th.bing.com/th/id/OIP.F2XOBhKXhiDs8Fv-Tde6YgHaIJ?w=196&h=216&c=7&r=0&o=5&dpr=2&pid=1.7"
          alt=""
        />
        <div className="userChatInfo">
          <span>Kim Min</span>
          <p>hello Jane</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://th.bing.com/th/id/OIP.F2XOBhKXhiDs8Fv-Tde6YgHaIJ?w=196&h=216&c=7&r=0&o=5&dpr=2&pid=1.7"
          alt=""
        />
        <div className="userChatInfo">
          <span>Kim Min</span>
          <p>hello Jane</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
