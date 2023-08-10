import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
const Chats = (props) => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    
    currentUser.uid && getChats();
  }, [currentUser.uid]);
  console.log("Current data: ", Object.entries(chats));

  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat)=>
      <div className="userChat" key={chat[0]}  >
        <img
          src={chat[1].userInfo.photoURL}
          alt={chat[1].userInfo.displayName}
        />
        <div className="userChatInfo">
          <span>{chat[1].userInfo.displayName}</span>
          <p>{chat[1].userInfo?.lastMessage?.text}</p>
        </div>
      </div>
      )}
    </div>
  );
};

export default Chats;
