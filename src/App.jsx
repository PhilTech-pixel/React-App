import React from "react";
import "./App.css";
import { animals } from "./facts";

function Facts(e) {
  const targ = e.target.alt;
  const facts = animals[targ].facts;
  const factNo = Math.floor(Math.random() * facts.length);
  const selectedFact = facts[factNo];

  const factElement = document.getElementById("fact");
  factElement.innerText = selectedFact;

  const imageElement = document.getElementById(targ);
  if (imageElement) {
    const images = animals[targ].image;
    const imageNo = Math.floor(Math.random() * images.length);
    const selectedImage = images[imageNo];

    imageElement.src = selectedImage;
  }
}

function App() {
  return (
    <div className="background">
      <h1>Click an animal for a fun fact!</h1>
      <h2 id="fact"></h2>

      <img
        id="dolphin"
        src={animals.dolphin.image[0]}
        alt="dolphin"
        onClick={Facts}
        className="animal-image"
      />
      <img
        id="lobster"
        src={animals.lobster.image[0]}
        alt="lobster"
        onClick={Facts}
        className="animal-image"
      />
      <img
        id="starfish"
        src={animals.starfish.image[0]}
        alt="starfish"
        onClick={Facts}
        className="animal-image"
      />
    </div>
  );
}

export default App;
