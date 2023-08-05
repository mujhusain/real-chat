import React from "react";
import user from "../img/user.png"
const Register = (props) => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">RealChat 💬</span>
            <span className="title">Register</span>
            <form action="">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input style={{display:'none'}} type="file" id="avatar" />
                <label htmlFor="avatar">
                  <img src={user} alt="user_avatar" />
                  <span>Select Avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>If you are already registred! Please Login </p>
        </div>
    </div>
  )
};

export default Register;
