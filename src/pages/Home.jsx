import React from "react"
import Chat from "../components/Chat";
import LeftSidebar from "../components/LeftSidebar";

const Home = (props) => {
  return (
    <div className="home">
      <div className="container">
        <LeftSidebar/>
        <Chat/>
      </div>
    </div>
  )
};

export default Home;
