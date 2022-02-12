// import Alex_Padilla from './images/Alex_Padilla';


const ImageContainer = ({politician}) => { 
    console.log(politician)
    const url = politician.name.split(' ').join('_');
    return ( 
        <img src={politician.url} alt={"senator image"}/> 
    )  
}

export default ImageContainer;