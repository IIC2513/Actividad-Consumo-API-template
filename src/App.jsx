import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  /*
  states
    inputPokemonName: El nombre del Pokémon por el que queremos consultar en la API ingresado en en el input
    selectedPokemonName: El nombre del Pokémon por el que queremos consultar en la API seleccionado en el dropdown
    allPokemonNames: Los nombres de todos los Pokémon
    pokemonData: La información de Pokémon que recibimos de la API
  */

  const [inputPokemonName, setInputPokemonName] = useState("");
  const [selectedPokemonName, setSelectedPokemonName] = useState("");
  const [allPokemonNames, setAllPokemonNames] = useState([]);
  const [pokemonData, setPokemonData] = useState(null);

  // COMPLETAR
  const getPokemonData = async (pokemonName) => {
    try {
      /*
      Consultar la API con, 
        Endpoint: /pokemon/<pokemonName>
        Método: GET

      Y actualizar valor del state "pokemonData"
      */

    } catch (error) {
      console.log(error);
    }
  };

  // COMPLETAR
  const getPokemonNames = async (quantity) => {
    try {
      /*
      Consultar la API con,
        Endpoint: /pokemon?limit=<quantity>
        Método: GET

      Y actualizar valor del state "allPokemonNames"

      (Estos valores se reflejarán en las opciones del dropdown)
      */

      // Hint: usar <response>.data.results.map(pokemon => pokemon.name)

    } catch (error) {
      console.log(error);
    }
  }

  /*
  DE AQUI EN ADELANTE NO NECESITAN EDITAR NADA,
  pero los invitamos a explorar!
  */

  const handleFormSubmit1 = (event) => {
    event.preventDefault();
    getPokemonData(inputPokemonName);
  };
  
  const handleFormSubmit2 = (event) => {
    event.preventDefault();
    getPokemonData(selectedPokemonName);
  };
  

  useEffect(() => {
    getPokemonNames(100);
  }, [])

  return (
    <>
      <h1>Consulta PokeApi</h1>

      <div className='flex row'>
        <form onSubmit={handleFormSubmit1} className='flex column'>
          <h3>Escribe el nombre de un Pokémon</h3>
          <input
            value={inputPokemonName}
            onChange={(event) => { setInputPokemonName(event.target.value) }} />
          <button type="submit" disabled={inputPokemonName === ""}>Enviar</button>
        </form>

        <form onSubmit={handleFormSubmit2} className='flex column'>
          <h3>Selecciona un Pokemón</h3>
          <select
            value={selectedPokemonName}
            onChange={(event) => { setSelectedPokemonName(event.target.value) }}>
            <option value="">Selecciona un Pokémon</option>
            {allPokemonNames.map((name, index) => (
              <option key={index} value={name}>{name}</option>
            ))}
          </select>
          <button type="submit" disabled={selectedPokemonName === ""}>Enviar</button>
        </form>
      </div>


      {pokemonData && (
        <div className='flex column'>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
        </div>
      )}
    </>
  )
}

export default App

