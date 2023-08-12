import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

const Navbar = (props) => {
  const {currentUser}=useContext(AuthContext);
  return (
    <div className="navbar">
        {/* <span className="logo" >RealChat 💬</span> */}
        <div className="user">
            <img src={currentUser.photoURL} alt="" />
            <span className="userName">Welcome {currentUser.displayName}</span>
           
        </div>
    </div>
  )
};

export default Navbar;
