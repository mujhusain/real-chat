import React, { useContext } from "react";
import cam from "../img/cam.png";
import add_user from "../img/add_user.png";
import more from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContextProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button} from "@mui/material";

const Chat = (props) => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="userInfo">
        <img src={data.user.photoURL} alt="" />
        <span>{data.user?.displayName}</span>
        </div>
        <div className="otherFeaters">
          <img src={cam} alt="Camera" />
          <img src={add_user} alt="Add" />
          <img src={more} alt="more" />
        </div>
        <Button
          endIcon={<LogoutIcon />}
          onClick={() => signOut(auth)}
          variant="outlined"
        >
          Logout
        </Button>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
