import React, { useState } from "react";

import './App.css';
import { getRandomPolitician } from "./helpers/politicianMapping";
import { statesMapping } from "./helpers/states";
import ImageContainer from './ImageContainer';
import ResultText from "./ResultText";
import StateSelection from './StateSelection';

let politician = getRandomPolitician();

const App = () => {
  const [mainText, setMainText] = useState("What state am I from?");
  const [gameOver, setGameOver] = useState(false);
  const [guesses, setGuesses] = useState([]);

  const onGuess = guess => () => {
    const realGuess = statesMapping[guess].toUpperCase();
    setGuesses(guesses.concat(realGuess))
    if(realGuess === politician.state.toUpperCase()){
      setMainText(`Correct! I am ${politician.name} of ${politician.state}`);
      setGameOver(true);
    }
    else if(guesses.length >= 5){
      setMainText(`Game over. This is ${politician.name} of ${politician.state}`);
      setGameOver(true);
    }
  }

  const playAgain = () => {
    politician = getRandomPolitician();
    setMainText("What state am I from?");
    setGameOver(false);
    setGuesses([]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className={'politicle'}>Politicle</h1>
        <ImageContainer politician={politician} />
        <p>
          {mainText}
        </p>
        {!gameOver && <StateSelection onGuess={onGuess} />}
        {gameOver && 
          <button onClick={playAgain}>
              Start over
          </button>}
        <div className={'results'}>
          {guesses.map((guess, i) => {
            return <ResultText key={i} guess={guess} politician={politician} />
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
