import React, { useState } from "react";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  // function we pass into useAxios which specfies how the data should be formated
  // when it is being saved in state and localStorage, this avoids saving
  // unessasary data
  const formatData = (data) => {
    return {image : data.cards[0].image}
  }

  // using custom hook we are able to make an API call and get an array of
  // returned data, and use addCard function to add new data to that array.
  const [cards, addCard, clearBoard] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/", formatData, 'playingCards');

  return (
    <div className="PlayingCardList">
      <button onClick={clearBoard}>Clear Board</button>
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
