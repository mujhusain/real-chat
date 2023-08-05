import React from "react";
import file from "../img/file.png";

const Input = (props) => {
  return (
    <div className="inputContainer">
      <input type="text" placeholder="Message..." />
      <div className="send">
        <input
          type="file"
          style={{ display: "none" }}
          name=""
          id="attachFile"
        />
        <label htmlFor="attachFile">
          <img src={file} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
