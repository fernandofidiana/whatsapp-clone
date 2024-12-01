import { useState, useEffect, useRef } from "react";
const pokemons = [
  { id: 1, nombre: "Pikachu", tipo: "Eléctrico", fuerza: 55 },
  { id: 2, nombre: "Charizard", tipo: "Fuego", fuerza: 84 },
  { id: 3, nombre: "Bulbasaur", tipo: "Planta", fuerza: 49 },
  { id: 4, nombre: "Squirtle", tipo: "Agua", fuerza: 44 },
  { id: 5, nombre: "Jigglypuff", tipo: "Normal", fuerza: 45 },
  { id: 6, nombre: "Gengar", tipo: "Fantasma", fuerza: 65 },
  { id: 7, nombre: "Eevee", tipo: "Normal", fuerza: 55 },
  { id: 8, nombre: "Machamp", tipo: "Lucha", fuerza: 130 },
  { id: 9, nombre: "Alakazam", tipo: "Psíquico", fuerza: 50 },
  { id: 10, nombre: "Onix", tipo: "Roca", fuerza: 45 },
];

function Formulario() {
  
  
  /*return (
    <>
      <h1>Pokemons</h1>
      <form id="mi-formulario">
        <input
          id="id-nombre"
          type="text"
          placeholder="Nombre"
          onChange={handleChange}
        ></input>
        <button onClick={handleClick}>Buscar</button>
      </form>
      <ol>
        {arrPokemons.map((pok) => (
          <li key={pok.id}>{pok.nombre + " " + pok.tipo + " " + pok.fuerza}</li>
        ))}
      </ol>
    </>
  );*/
  const [inputBuscar,setInputBuscar] = useState('')
  const inputF = useRef()
  return(
    <div>
      <h1>Mi formulario</h1>
      <form id='formulario-form-id'>
        filtro:<input ref={inputF} id="formulario-input-id" onChange={(e)=>{setInputBuscar(inputF.current.value)}}></input>
      </form>
      <ol>
        {pokemons.filter((pok)=>pok.nombre.toLowerCase().includes(inputBuscar.toLowerCase())).map(e=><li key={e.id}>{e.nombre}</li>)}
      </ol>
    </div>
  )
}
export default Formulario;
