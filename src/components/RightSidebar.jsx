import React, { useContext, useEffect, useState } from "react";
import { collectionGroup, doc, getDoc, getDocs, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Menu, MenuItem } from "react-pro-sidebar";
import Badge from "@mui/material/Badge";
import { AuthContext } from "../context/AuthContextProvider";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const RightSidebar = (props) => {
  const [users, setUsers] = useState([]);
  const {currentUser} =useContext(AuthContext);

  useEffect(() => {
    const getChats = async () => {
      const users = collectionGroup(db, "users");
      const querySnapshot = await getDocs(users);
      const usersList = [];
      querySnapshot.forEach((doc) => {
        usersList.push(doc.data());
      });
      setUsers(usersList);
    };
    getChats();
  }, []);
  const handleSelect = async (user) => {
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
    }
  };
  return (
    <div className="rightSideBar">
      <div className="usersList">
      <div className="navbar">
        <span>All Users</span>
      </div>
        <Menu>
          {users?.map((u) => (
            <MenuItem
              onClick={() => handleSelect(u)}
              icon={
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant={"standard"}
                >
                  <Avatar alt={u.displayName} src={u.photoURL} />
                </StyledBadge>
              }
              key={u.uid}
            >
              <div className="userChat">
                <div className="userChatInfo">
                  <span>{u.displayName}</span>
                </div>
              </div>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default RightSidebar;
