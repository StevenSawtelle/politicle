import MainGame from "./MainGame.component";
import {getRandomAZHousePolitician, housePoliticiansInDistrictOrder} from "../helpers/azHouseHelpers";
import React from "react";

const nameOptions = housePoliticiansInDistrictOrder.map(politician => {
    return { value: politician.name, text: politician.name }
})

const AZHouseLanding = () => {
    return <div>
        <div><a className={'swap-games'} href={"/#/azSenate"}>Play the AZ Senate version</a></div>
        <div><a className={'swap-games'} href={"/"}>Play the US Senate version</a></div>
        <MainGame choicesMap={nameOptions}
                  answerField={'name'}
                  answerGenerator={getRandomAZHousePolitician}
                  prompt={"What's my name?"}
                  getRealGuess={(guess) => housePoliticiansInDistrictOrder.find(politician => guess === politician.name).name.toUpperCase()}/>
    </div>
};

export default AZHouseLanding;