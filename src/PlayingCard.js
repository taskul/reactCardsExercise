import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useToggleFlip from "./hooks/useToggleFlip";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  // using custom hook to manage flip state of the card
  const [isFacingUp, flipCard] = useToggleFlip(true)

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
