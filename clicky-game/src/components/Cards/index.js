import React from "react";
import "./style.css";

// This just displays the card

function Cards(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    
      <span className="remove" onClick={() => props.randomCard(props.id)}>𝘅</span>
    </div>
  );
}

export default Cards;
