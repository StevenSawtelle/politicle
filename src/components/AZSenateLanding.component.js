import MainGame from "./MainGame.component";
import {getRandomAZSenatePolitician, politiciansInDistrictOrder} from "../helpers/azSenateHelpers";
// import {statesMapping} from "../helpers/states";

const nameOptions = politiciansInDistrictOrder.map(politician => {
    return { value: politician.name, text: politician.name }
})

const AZSenateLanding = () => {
    return <div>
        <a href={"/"}>Play the US Senate version</a>
        <MainGame choicesMap={nameOptions}
                  answerField={'name'}
                  answerGenerator={getRandomAZSenatePolitician}
                  prompt={"What's my name?"}
                  getRealGuess={(guess) => politiciansInDistrictOrder.find(politician => guess === politician.name).name.toUpperCase()}/>
    </div>
};

export default AZSenateLanding;