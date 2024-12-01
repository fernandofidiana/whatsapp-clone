import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
//import login from "./components/login";

import "./App.css";

function App() {
  // Estado para almacenar el chat seleccionado
  const [selectedChat, setSelectedChat] = useState(null);
  // Estado para controlar la visibilidad de la barra lateral, las variables booleanas suelen empezar por is
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //


  // Función para alternar la visibilidad de la barra lateral
  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

/*  function cargarMensajes(){
    const options = {
      method: 'GET',
      headers: {
        apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6dnRmb3lycHJleW1oaG9zcWZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NDU4NTMsImV4cCI6MjA0NDEyMTg1M30.HIL5UR_i5cmrUegdU6yZFSHwAOqilOAs8lhCUGSgtxo',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6dnRmb3lycHJleW1oaG9zcWZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NDU4NTMsImV4cCI6MjA0NDEyMTg1M30.HIL5UR_i5cmrUegdU6yZFSHwAOqilOAs8lhCUGSgtxo'
      }
    };
    
    fetch('https://bzvtfoyrpreymhhosqfz.supabase.co/rest/v1/whatsappWebMenssages?select=*', options)
      .then(response => response.json())
      .then(data => {
        setDatos(data)
        
        })
      .catch(err => console.error(err));
    } */
  
  //console.log(Datos)
  
  return (
    <div className="app">
      {/* Botón de menú para abrir/cerrar la lista de chats en pantallas pequeñas
      
      Renderizo condicional, solo sale el botón cuando no está visible la sidebar*/}

      {!isSidebarOpen && (
        <button className="menu-button" onClick={toggleSidebar}>
          Abrir Chats
        </button>
      )}

      {/* La barra lateral se muestra o se oculta según el estado `isSidebarOpen` 
      Parametros:
      - onSelectChat funcion callback en este caso cambio el estado de selectedChat
      - isOpen: booleano para saber si la barra está abierta, paso el estado isSidebarOpen
      - onClose: funcion callback para cambiar el estado del padre osea App al cerrar el sidebar
      */}
      <Sidebar
        onSelectChat={setSelectedChat}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Ventana de chat principal */}
      <ChatWindow selectedChat={selectedChat} yourChat={sessionStorage.getItem('userid')} />
      
    </div>
  );
}

export default App;
