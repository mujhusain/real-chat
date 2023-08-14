import React from "react";
import { MenuItem } from "react-pro-sidebar";
import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const UserItem = (props) => {
  return (
    <MenuItem
      onClick={() => props.handleSelect(props.chat[1].userInfo)}
      icon={
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            alt={props.chat[1].userInfo?.displayName}
            src={props.chat[1].userInfo?.photoURL}
          />
        </StyledBadge>
      }
      key={props.chat[0]}
    >
      <div className="userChat">
        <div className="userChatInfo">
          <span>{props.chat[1].userInfo?.displayName}</span>
          <p>{props.chat[1]?.lastMessage?.text}</p>
        </div>
      </div>
    </MenuItem>
  );
};

export default UserItem;
