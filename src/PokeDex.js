import React, { useState } from "react";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/`

  // function we pass into useAxios which specfies how the data should be formated
  // when it is being saved in state and localStorage, this avoids saving
  // unessasary data
  const formatData = (data) => {
    const formatedData = { 
      front : data.sprites.front_default,
      back: data.sprites.back_default,
      name: data.name,
      stats: data.stats.map(stat => ({
        name: stat.stat.name,
        value: stat.base_stat
        }))
    } 
    return formatedData;
  }

  // we pass in BASE_URL, function for formating data, and 'key' for saving in localStorage
  const [pokemon, addPokemon, clearBoard] = useAxios(BASE_URL, formatData, 'pokemon');

  return (
    <div className="PokeDex">
      <button onClick={clearBoard}>Clear Board</button>
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.front}
            back={cardData.back}
            name={cardData.name}
            stats={cardData.stats.map(stat => ({
              value: stat.value,
              name: stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
