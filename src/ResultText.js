import React, { useState } from "react";

import './styles/letters.scss';

const getStatus = (guess, goal, index) => {
    if(index >= goal.length){
        return goal.split('').includes(guess[index]) ? 'misplaced' : 'incorrect';
    }
    if(guess[index] === goal[index]){
        return 'correct';
    }
    return goal.split('').includes(guess[index]) ? 'misplaced' : 'incorrect';
}

const WordleLetter = ({ status, letter }) => {
    return <div className={'wordle-letter'}>
        <p className={`tile ${status}`}>
            {letter}
        </p>
    </div>;
}

const ResultText = ({guess, politician }) => {
    return <div className='result-text'>
        {guess.split('').map((letter, i) => {
            return letter != ' ' ? <WordleLetter key={i}
                status={getStatus(guess, politician.state.toUpperCase(), i)}
                letter={letter}
            /> : <></>
        })}
    </div>
}

export default ResultText;