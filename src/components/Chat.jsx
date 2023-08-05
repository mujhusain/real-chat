import React from "react"
import cam from "../img/cam.png";
import add_user from "../img/add_user.png";
import more from "../img/more.png";

const Chat = (props) => {
  return (
    <div className="chat">
        <div className="chatInfo">
            <span>Muajffar</span>
            <div className="otherFeaters">
                <img src={cam} alt="Camera" />
                <img src={add_user} alt="Add" />   
                <img src={more} alt="more" />
            </div>
        </div>
    </div>
  )
};

export default Chat;
