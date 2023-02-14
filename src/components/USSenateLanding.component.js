import React from "react";

import {statesMapping} from "../helpers/states";
import {getRandomPolitician} from "../helpers/usSenateMapping";
import MainGame from "./MainGame.component";

const stateOptions = Object.entries(statesMapping).map(state => {
    return { value: state[0], text: state[1] }
})

const USSenateLanding = () => {
    return <div className={'us-senate'}>
        <a className={'swap-games'} href={"/azSenate"}>Play the AZ Senate version</a>
        <MainGame choicesMap={stateOptions}
                  answerField={'location'}
                  answerGenerator={getRandomPolitician}
                  prompt={"What state am I from?"}
                  getRealGuess={(guess) => statesMapping[guess].toUpperCase()}/>
    </div>
};

export default USSenateLanding;
