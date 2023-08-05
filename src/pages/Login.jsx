import React from "react"

const Login = (props) => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">RealChat 💬</span>
            <span className="title">Login</span>
            <form action="">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input style={{display:'none'}} type="file" id="avatar" />
                <button>Sign in</button>
            </form>
            <p>You dont have account? Register </p>
        </div>
    </div>
  )
};

export default Login;
