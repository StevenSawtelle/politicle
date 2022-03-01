import React, { useState } from "react";

import './App.css';
import { getRandomPolitician } from "./helpers/politicianMapping";
import { statesMapping } from "./helpers/states";
import ImageContainer from './ImageContainer';
import { EmptyResults, ResultText } from "./ResultText";
import StateSelection from './StateSelection';

let politician = getRandomPolitician();

const App = () => {
  const [mainText, setMainText] = useState("What state am I from?");
  const [gameOver, setGameOver] = useState(false);
  const [guesses, setGuesses] = useState([]);
  const [attempted, setAttempted] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [avgGuesses, setAvgGuesses] = useState(0);
  const [pastGuesses, setPastGuesses] = useState([]);

  const onGuess = guess => () => {
    const realGuess = statesMapping[guess].toUpperCase();
    const oldGuesses = guesses;
    const newGuesses = oldGuesses.concat(realGuess)
    setGuesses(newGuesses)
    if(realGuess === politician.state.toUpperCase()){
      setMainText(`Correct! I am ${politician.name} of ${politician.state}`);
      // this code is ugly but its purpose is to not need to process state. could be a lot cleaner
      const oldCorrect = correct;
      const newCorrect = oldCorrect + 1;
      setAttempted(attempted + 1);
      setCorrect(correct + 1);
      const oldPastGuesses = pastGuesses;
      const newPastGuesses = [...oldPastGuesses, newGuesses];
      setPastGuesses(newPastGuesses);
      const sum = newPastGuesses.reduce((prev, cur) => prev + cur.length, 0);
      setAvgGuesses(parseFloat((sum / newCorrect).toFixed(2)));
      setGameOver(true);
    }
    else if(guesses.length >= 5){
      setMainText(`Game over. This is ${politician.name} of ${politician.state}`);
      setAttempted(attempted + 1);
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
        <p className={'mainText'}>
          {mainText}
        </p>
        <p className={'score'}>Attempted: {attempted}</p>
        <p className={'score'}>Correct: {correct} ({parseFloat((correct / attempted * 100).toFixed(2)) || 0}%)</p>
        <p className={'score'}>Average Guesses: {avgGuesses}</p>
        {!gameOver && <StateSelection onGuess={onGuess} />}
        {gameOver && 
          <button onClick={playAgain}>
              Start over
          </button>}
        <div className={'results'}>
          {guesses.map((guess, i) => {
            return <ResultText key={i} guess={guess} politician={politician} />
          })}
          {!gameOver && [0,1,2,3,4,5].map(i => {
            return guesses.length <= i ? <EmptyResults key={i} /> : null
          })}
        </div>
        <p className={'subtext'}>Happy Valentine's Day Abigail!</p>
        <p className={'subtext'}>A website by <a href='https://www.stevensawtelle.com'>Steven Sawtelle</a></p>
      </header>
    </div>
  );
}

export default App;
