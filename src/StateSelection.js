import React, {useState} from "react";
import { Dropdown } from 'semantic-ui-react'
import { statesMapping } from './helpers/states';

const stateOptions = Object.entries(statesMapping).map(state => {
    return { value: state[0], text: state[1] }
})
  
const StateSelection = ({onGuess}) => {
    const [guess, setGuess] = useState("");
    
    return <div style={{display: "inline-flex"}}>
        <Dropdown
            placeholder='Select State'
            fluid={false}
            search
            selection
            options={stateOptions}
            onChange={(_, d) => setGuess(d.value)}
        />
        <button onClick={onGuess(guess)}>
            Guess
        </button>
    </div>

    };

export default StateSelection;