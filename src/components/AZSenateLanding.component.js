import MainGame from "./MainGame.component";
import {getRandomAZSenatePolitician, azSenatePoliticiansInDistrictOrder} from "../helpers/azSenateHelpers";
import React from "react";
import {handleVersionChange} from "../helpers/helpers";

const nameOptions = azSenatePoliticiansInDistrictOrder.map(politician => {
    return { value: politician.name, text: politician.name }
})

const AZSenateLanding = () => {
    return <div>
        <div><a className={'swap-games'} onClick={() => handleVersionChange('azHouse')}>Play the AZ House version</a></div>
        <div><a className={'swap-games'} onClick={() => handleVersionChange('usSenate')}>Play the US Senate version</a></div>
        <MainGame choicesMap={nameOptions}
                  answerField={'name'}
                  answerGenerator={getRandomAZSenatePolitician}
                  prompt={"What's my name?"}
                  getRealGuess={(guess) => azSenatePoliticiansInDistrictOrder.find(politician => guess === politician.name).name.toUpperCase()}/>
    </div>
};

export default AZSenateLanding;