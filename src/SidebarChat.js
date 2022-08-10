import React from "react";
import { Avatar } from "@mui/material";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebar_info">
        <h2>Roronoa Zoro</h2>
        <p>this the last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
