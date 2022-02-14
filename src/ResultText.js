import React, { useState } from "react";

import './styles/letters.scss';

const getHitList = (guess, goal) => {

    //first init array of incorrect guesses
    let hitList = Array.apply(null, Array(guess.length)).map(() => 'incorrect' )
    let usedLetters = {};
    //first pass for correct letters
    for(let i = 0; i < guess.length; i+=1){
        if(i >= goal.length){
            break;
        }
        if(goal[i] === guess[i]){
            hitList[i] = 'correct';
            if(usedLetters[goal[i]]){
                usedLetters[goal[i]] += 1;
            }
            else {
                usedLetters[goal[i]] = 1;
            }
        }
    }
    //then pass for misplaced letters
    const goalCharArray = goal.split('');
    for(let i=0; i < guess.length; i+=1){
        if(hitList[i]==='correct'){
            continue;
        }
        let cur = guess[i];
        if(goalCharArray.includes(cur)){
            //possible misplace, but need to see if letter already used
            const countOfCurInGoal = goal.split(cur).length - 1;
            const alreadyUsedCurCount = usedLetters[cur] || 0;
            if(countOfCurInGoal > alreadyUsedCurCount){
                //misplaced
                hitList[i] = 'misplaced';
                if(usedLetters[cur]){
                    usedLetters[cur] += 1;
                }
                else {
                    usedLetters[cur] = 1;
                }
            }
        }
    }
    return hitList;
}

const getStatus = (guess, goal, index) => {

    //first pass for correct letters




    console.log(guess, goal, index) 
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

export const EmptyResults = () => {
    return <div className='result-text'>
        {[0,1,2,3].map((i) => {
            return <WordleLetter key={i}
                status={'incorrect'}
            />
        })}
    </div>
}

export const ResultText = ({guess, politician }) => {
    const noSpaceGuess = guess.split(' ').join('');
    const noSpacePolticianState = politician.state.toUpperCase().split(' ').join('');
    const hitList = getHitList(noSpaceGuess,noSpacePolticianState);//eg ['correct', 'incorrect', 'incorrect', 'misplaced']
    return <div className='result-text'>
        {noSpaceGuess.split('').map((letter, i) => {
            return <WordleLetter key={i}
                status={hitList[i]}
                letter={letter}
            />
        })}
    </div>
}
