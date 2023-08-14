import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import {
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase.config";
import { ChatContext } from "../context/ChatContextProvider";
import UserItem from "./UserItem";

const Chats = (props) => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const updateUserStatus = async (isOnline) => {
    if (currentUser?.uid) {
      await updateDoc(doc(db, "users", currentUser.uid), {
        status: {
          isOnline: isOnline,
          lastSeen: isOnline ? null : serverTimestamp(),
        },
      });
    }
  };

  // Update user status when they log in
  auth.onAuthStateChanged((user) => {
    if (user) {
      updateUserStatus(true);
    } else {
      updateUserStatus(false);
    }
  });

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
  }, [currentUser?.uid]);

  const handleSelect = (userInfo) => {
    dispatch({ type: "CHANGE_USER", payload: userInfo });
  };
  return (
    <div className="chats">
      {Object.entries(chats)
        .sort((a, b) => b[1].date - a[1].date)
        ?.map((chat) => (
          <UserItem key={chat[0]} chat={chat} handleSelect={handleSelect} />
        ))}
    </div>
  );
};

export default Chats;
