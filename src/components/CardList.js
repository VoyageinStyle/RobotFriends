import React, { useState, useEffect } from "react";
import Card from "./Card.js";

const CardList = ({ robots }) => {

  const [selected, setSelected] = useState(null);
  const selectCard = (selectedCard) => {
    selected ? setSelected(null) : setSelected(selectedCard);
    return selected
  };
  
  useEffect(() => {
    setSelected(null);
  }, [robots])
 
  if (!robots.length) {
    return <h1 className="pv6">No robots with that name</h1>;
  }
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
              hidden={selected}
            />
          );
        })}
      </div>
    );
};

export default CardList;
