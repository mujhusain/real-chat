import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
const Sidebar1 = (props) => {
  const { collapseSidebar } = useProSidebar();
  return (
    <div className="sidebar">
      <Sidebar style={{ height: "100%" }} backgroundColor="#52608e">
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
      </Sidebar>
    </div>
  );
};

export default Sidebar1;
