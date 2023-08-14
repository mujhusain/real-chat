import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import { Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import LogoutIcon from "@mui/icons-material/Logout";
const LeftSidebar = (props) => {
  const { collapseSidebar } = useProSidebar();
  return (
    <div className="leftSideBar">
      <Sidebar style={{ height: "100%"  }} backgroundColor="#52608e">
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            <Navbar />
          </MenuItem>
          <MenuItem
            icon={<PersonSearchOutlinedIcon />}
            style={{ textAlign: "center" }}
          >
            <Search />
          </MenuItem>

          <Chats />
        </Menu>
        <Menu style={{position:"absolute",bottom:0,right:0,left:0}} >
        <MenuItem
        onClick={() => signOut(auth)}
            icon={<LogoutIcon />}
            >
              <Typography sx={{color:"white"}} >Logout</Typography>
          </MenuItem>
          </Menu>
      </Sidebar>
      
    </div>
  );
};

export default LeftSidebar;
