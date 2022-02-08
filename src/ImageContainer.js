// import Alex_Padilla from './images/Alex_Padilla';

import { getRandomPolitician } from "./helpers/politicianMapping";


// const ImageContainer = () => {

// }


function ImageContainer(){ 
    const politician = getRandomPolitician();
    const url = politician.name.split(' ').join('_');
    return ( 
        <img src={`/images/${url}.jpg`} alt={"senator image"}/> 
    )  
}

export default ImageContainer;