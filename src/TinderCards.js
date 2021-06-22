import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Tribal People",
      url: "./images/tribal.jpg",
    },
    {
      name: "Tourism",
      url: "./images/tourisum.jpg",
    },
    {
      name: "Racer",
      url: "./images/racer.jpg",
    },
  ]);

const swiped = (direction,nameToDelete) => {
    console.log("removing:"+nameToDelete);
}

const outoffFrame = (name) => {
    console.log(name+"left the screen!!")
}

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outoffFrame(person.name)}
          >
              <div style={{backgroundImage:`url(${person.url})`}}
              className="card">
              <h3>{person.name}</h3></div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
