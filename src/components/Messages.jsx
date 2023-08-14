import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { ChatContext } from "../context/ChatContextProvider";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.config";
import FlatList from "flatlist-react/lib";

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
      <FlatList
          list={messages}
          renderItem={(m)=><Message {...m} key={m.id} />}
          renderWhenEmpty={() => <h2>Say Hi to {data.user?.displayName}</h2>}
        />
    </div>
  );
};

export default Messages;
