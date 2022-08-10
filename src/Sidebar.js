import React from "react";
import "./Sidebar.css";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from "./SidebarChat";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/One-Piece-Luffy.jpg"></Avatar>
        <div className="sidebar_header_right">
          <IconButton>
            <ChatBubbleIcon />
          </IconButton>
          <IconButton>
            <DonutLargeIcon></DonutLargeIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
        
      </div>
      <div className="sidebar_search">
          <div className="sidebar_searchContainer">
            <SearchOutlinedIcon />
            <input placeholder="search or start new chat" type="text"/>
          </div>
         
        </div>
        <div className="sidebar_chatList">
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>

          </div>
    </div>
  );
}

export default Sidebar;
