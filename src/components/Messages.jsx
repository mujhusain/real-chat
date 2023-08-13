import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { ChatContext } from "../context/ChatContextProvider";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.config";

const Messages = (props) => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const getMessages = () => {
      const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
        doc.exists() && setMessages(doc.data().messages);
      });
      return () => {
        unsub();
      };
    };
    data.chatId && getMessages();
  }, [data.chatId]);
  return (
    <div className={`messages ${messages.length === 0 && "nomessages"}`}>
      {messages.length !== 0 ? (
        messages?.map((m) => <Message {...m} key={m.id} />)
      ) : (
        <h2>Please select user to start Chat</h2>
      )}
    </div>
  );
};

export default Messages;
