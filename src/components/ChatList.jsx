import "./styles/ChatList.css";
import chats from "../mocks/chats";
import Avatar from "@mui/material/Avatar";
import Chat from "./Chat";
import { useEffect, useState } from "react";

/* mapea los chats que está en los mocks/chats.js y los muestra en la lista de chats  
debes pensar donde hacer el fetch, si pasarlo como props... pero no lo dejes como variable global
*/
/* eslint-disable react/prop-types */
function ChatList({ onSelectChat }) {
  const [usuData, setUsuarios] = useState([]);
  const [nameTemp, setname]=useState("");
  const [mensajesProp, setMensajes]=useState([]);
  //console.log(sessionStorage.getItem('userid'));
  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6dnRmb3lycHJleW1oaG9zcWZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NDU4NTMsImV4cCI6MjA0NDEyMTg1M30.HIL5UR_i5cmrUegdU6yZFSHwAOqilOAs8lhCUGSgtxo',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6dnRmb3lycHJleW1oaG9zcWZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NDU4NTMsImV4cCI6MjA0NDEyMTg1M30.HIL5UR_i5cmrUegdU6yZFSHwAOqilOAs8lhCUGSgtxo'
      }
    };
    
    
    fetch('https://bzvtfoyrpreymhhosqfz.supabase.co/rest/v1/usuarioswatsapp?select=*', options)
      .then(response => response.json())
      .then(usuarios => {
        setUsuarios(usuarios)
        setname(usuarios.name)

      })
      .catch(err => console.error(err));

    fetch('https://bzvtfoyrpreymhhosqfz.supabase.co/rest/v1/whatsappWebMenssages?select=*', options)
      .then(response => response.json())
      .then(mens => setMensajes(mens))
      .catch(err => console.error(err));
  })
  return (
    <div className="chat-list">
      {usuData.filter((e)=>e.userid!=sessionStorage.getItem('userid')).map((c) => (
        <Chat key={c.id} chat={c} onSelectChat={onSelectChat} lastMessages={mensajesProp}></Chat>
      ))}
    </div>
  );
}

export default ChatList;
