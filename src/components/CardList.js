import React, { useState } from "react";
import Card from "./Card.js";

const CardList = ({ robots }) => {
  const [selected, setSelected] = useState(null);

  const selectCard = (selectedCard) => {
    selected ? setSelected(null) : setSelected(selectedCard);
  };

  // if (!selected) {
  //   console.log("no card selected");
  // } else {
  //   console.log(`selected card n°${selected}`);
  // }
  
  if (!robots.length) {
    return <h1 className="pv6">No robots with that name</h1>;
  }
  if (selected) {
    return (
      <div className="mv3">
        {robots.flatMap((card, i) => {
          if (card.id !== selected) {
            return [];
          }
          return (
            <Card
              key={robots[i].id}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              selected={selectCard}
            />
          );
        })}
      </div>
    );
  }
  if (!selected) {
    return (
      <div className="mv3">
        {robots.map((user, i) => {
          return (
            <Card
              key={robots[i].id}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              selected={selectCard}
            />
          );
        })}
      </div>
    );
  }
};

export default CardList;
