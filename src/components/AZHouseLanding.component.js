import MainGame from "./MainGame.component";
import {getRandomAZHousePolitician, housePoliticiansInDistrictOrder} from "../helpers/azHouseHelpers";
import React from "react";
import {handleVersionChange} from "../helpers/helpers";

const nameOptions = housePoliticiansInDistrictOrder.map(politician => {
    return { value: politician.name, text: politician.name }
})

const AZHouseLanding = () => {
    return <div>
        <div><a className={'swap-games'} onClick={() => handleVersionChange('azSenate')}>Play the AZ Senate version</a></div>
        <div><a className={'swap-games'} onClick={() => handleVersionChange('usSenate')}>Play the US Senate version</a></div>
        <MainGame choicesMap={nameOptions}
                  answerField={'name'}
                  answerGenerator={getRandomAZHousePolitician}
                  prompt={"What's my name?"}
                  getRealGuess={(guess) => housePoliticiansInDistrictOrder.find(politician => guess === politician.name).name.toUpperCase()}/>
    </div>
};

export default AZHouseLanding;