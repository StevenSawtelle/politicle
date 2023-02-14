import React, {useState} from "react";
import { Dropdown } from 'semantic-ui-react'
import { statesMapping } from './helpers/states';
  
const DropdownSelection = ({onGuess, choicesMap}) => {
    const [guess, setGuess] = useState("");
    
    return <div style={{display: "inline-flex"}}>
        <Dropdown
            placeholder='Select State'
            fluid={false}
            search
            selection
            options={choicesMap}
            onChange={(_, d) => setGuess(d.value)}
        />
        <button onClick={onGuess(guess)}>
            Guess
        </button>
    </div>

    };

export default DropdownSelection;