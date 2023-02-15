import React, { useState } from "react";

import ImageContainer from "../ImageContainer";
import DropdownSelection from "../DropdownSelection";
import {EmptyResults, ResultText} from "../ResultText";

const MainGame = ({choicesMap, answerGenerator, prompt, getRealGuess, answerField}) => {
    const [usedAnswers, setUsedAnswers] = useState([]);
    const [answer, setAnswer] = useState(answerGenerator(usedAnswers));
    const [mainText, setMainText] = useState(prompt);
    const [gameOver, setGameOver] = useState(false);
    const [guesses, setGuesses] = useState([]);
    const [attempted, setAttempted] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [avgGuesses, setAvgGuesses] = useState(0);
    const [pastGuesses, setPastGuesses] = useState([]);

    const onGuess = guess => () => {
        const realGuess = getRealGuess(guess);
        const oldGuesses = guesses;
        const newGuesses = oldGuesses.concat(realGuess)
        setGuesses(newGuesses)
        if(realGuess === answer[answerField].toUpperCase()){
            setMainText(`Correct! I am ${answer.name} of ${answer.location}`);
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
            setUsedAnswers([...usedAnswers, answer]);
        }
        else if(guesses.length >= 5){
            setMainText(`Game over. This is ${answer.name} of ${answer.location}`);
            setAttempted(attempted + 1);
            setGameOver(true);
            setUsedAnswers([...usedAnswers, answer]);
        }
    }

    const playAgain = () => {
        setAnswer(answerGenerator(usedAnswers));
        setMainText(prompt);
        setGameOver(false);
        setGuesses([]);
    }
    return <div className={'main-game'}>
        <ImageContainer politician={answer} />
        <p className={'mainText'}>
            {mainText}
        </p>
        <p className={'score'}>Attempted: {attempted}</p>
        <p className={'score'}>Correct: {correct} ({parseFloat((correct / attempted * 100).toFixed(2)) || 0}%)</p>
        <p className={'score'}>Average Guesses: {avgGuesses}</p>
        {!gameOver && <DropdownSelection onGuess={onGuess} choicesMap={choicesMap} />}
        {gameOver && usedAnswers.length !== choicesMap.length &&
            <button onClick={playAgain}>
                Start over
            </button>}
        <div className={'results'}>
            {guesses.map((guess, i) => {
                return <ResultText key={i} guess={guess} answer={answer} answerField={answerField} />
            })}
            {!gameOver && [0,1,2,3,4,5].map(i => {
                return guesses.length <= i ? <EmptyResults key={i} /> : null
            })}
        </div>
    </div>;
}

export default MainGame;