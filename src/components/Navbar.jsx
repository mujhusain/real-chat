import React from "react";
import user from "../img/user.png";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = (props) => {
  return (
    <div className="navbar">
        <span className="logo" >RealChat 💬</span>
        <div className="user">
            <img src={user} alt="" />
            <span className="userName">Mujaffar</span>
            <button onClick={()=>signOut(auth)} >Logout</button>
        </div>
    </div>
  )
};

export default Navbar;
