import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";

function Chat({chat,onSelectChat,lastMessages}){
    const [lastMessageCorr,setLastMess]=useState("")
    useEffect(()=>{
      lastMessages.filter((e)=>e.sender==chat.name || e.destiny==chat.name).map((c)=>setLastMess(c.text))
    })
    return(
        <div
          key={chat.id}
          className="chat-item"
          onClick={() => onSelectChat(chat)}
        >
          <div className="chat-container">
            {chat.avatar ? (
              <Avatar>{chat.name.charAt(0).toUpperCase()}</Avatar>
              
            ) : (
              <Avatar src={"https://robohash.org/"+chat.name} alt={chat.name} />
            )}

            <div className="chat-info">
              <h4>{chat.name}</h4>
              <p>{lastMessageCorr}</p>
            </div>
          </div>
        </div>
        
    )
}

export default Chat;