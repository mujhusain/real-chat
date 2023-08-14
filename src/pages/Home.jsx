import React from "react"
import RightSidebar from "../components/RightSidebar";
import Chat from "../components/Chat";
import LeftSidebar from "../components/LeftSidebar";

const Home = (props) => {
  return (
    <div className="home">
      <div className="container">
        <LeftSidebar/>
        <Chat/>
        <RightSidebar/>
      </div>
    </div>
  )
};

export default Home;
