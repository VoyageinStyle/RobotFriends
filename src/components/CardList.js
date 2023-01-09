import React from "react";
import Card from "./Card.js";

const CardList = ({ robots }) => {
  return !robots.length ? (
    <h1 className="pv6">No robots with that name</h1>
    ) : (
    <div className="mv3">
      {robots.map((user, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
