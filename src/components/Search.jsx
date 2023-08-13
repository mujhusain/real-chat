import React, { useContext, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { AuthContext } from "../context/AuthContextProvider";
import {  MenuItem } from "react-pro-sidebar";
import { Avatar } from "@mui/material";

const Search = (props) => {
  const { currentUser } = useContext(AuthContext);
  const [searchName, setSearchName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const citiesRef = collection(db, "users");
    const q = query(citiesRef, where("displayName", "==", searchName));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
    user && setUser(null);
  };

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //Add user in userChats collection
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            photoURL: user.photoURL,
            displayName: user.displayName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        //we need to update recipient userChats collection also
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            photoURL: currentUser.photoURL,
            displayName: currentUser.displayName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error);
      setErr(true);
    }
    setUser(null);
    setSearchName("");
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a buddy"
          onKeyDown={handleKey}
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>
      {err && <span>User not found</span>}
      {user && (
        <MenuItem
          icon={<Avatar alt={user.displayName} src={user.photoURL} />}
          style={{ textAlign: "center" }}
          onClick={handleSelect}
          >
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </MenuItem>
      )}
    </div>
  );
};

export default Search;
