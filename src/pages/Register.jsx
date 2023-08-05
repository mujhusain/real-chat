import React from "react"
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
                <input type="file" placeholder="Avatar" />
                <button>Register</button>
            </form>
            <p>If you are already registred! Please Login </p>
        </div>
    </div>
  )
};

export default Register;
