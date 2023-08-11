import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContextProvider";
import { auth } from "../firebase.config";

const Navbar = (props) => {
  const {currentUser}=useContext(AuthContext);
  return (
    <div className="navbar">
        <span className="logo" >RealChat 💬</span>
        <div className="user">
            <img src={currentUser.photoURL} alt="" />
            <span className="userName">{currentUser.displayName}</span>
            <button onClick={()=>signOut(auth)} >Logout</button>
        </div>
    </div>
  )
};

export default Navbar;
