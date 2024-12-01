import { useState } from "react";

function login({usuarioReg , claveReg}){
    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");
    const [token, setToken] = useState("");
    const [error, setError] = useState(false);

    function entrar(){
        const options = {
            method: 'POST',
            headers: {
              apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6dnRmb3lycHJleW1oaG9zcWZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NDU4NTMsImV4cCI6MjA0NDEyMTg1M30.HIL5UR_i5cmrUegdU6yZFSHwAOqilOAs8lhCUGSgtxo',
              'Content-Type': 'application/json'
            },
            body: '{"email":"'+usuario+'","password":"'+clave+'"}'
          };
          
          fetch('https://bzvtfoyrpreymhhosqfz.supabase.co/auth/v1/token?grant_type=password', options)
            .then(response => response.json())
            .then(data => {console.log(data)
            setToken(data["access_token"])})
            .catch(err => {console.error(err)
                setError(true)
            });
    }

    return(
        <div className="login">
            {error ? <div>Has introducido mal el correo y usuario</div>: <div></div>}
            <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="¿Cual es tu correo electrónico?"
            />
            borrame : usuario@gmail.com
            <input
            type="password"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            placeholder="Escribe la contraseña..."
            />
            borrame : 1A2B3C
            <button onClick={entrar}>Entrar</button>
        </div>

    )
}

export default login;