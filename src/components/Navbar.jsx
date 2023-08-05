import React from "react";
import user from "../img/user.png";

const Navbar = (props) => {
  return (
    <div className="navbar">
        <span className="logo" >RealChat 💬</span>
        <div className="user">
            <img src={user} alt="" />
            <span className="userName">Mujaffar</span>
            <button>Logout</button>
        </div>
    </div>
  )
};

export default Navbar;
