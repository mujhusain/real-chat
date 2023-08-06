import React from "react"

const Message = (props) => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="https://th.bing.com/th/id/OIP.F2XOBhKXhiDs8Fv-Tde6YgHaIJ?w=196&h=216&c=7&r=0&o=5&dpr=2&pid=1.7" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello Jane</p>
        <img src="https://th.bing.com/th/id/OIP.F2XOBhKXhiDs8Fv-Tde6YgHaIJ?w=196&h=216&c=7&r=0&o=5&dpr=2&pid=1.7" alt="" />
      </div>
    </div>
  )
};

export default Message;
