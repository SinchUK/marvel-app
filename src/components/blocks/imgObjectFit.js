

const ImgObjFit = ({char}) => {
    const {thumbnail} = char;
    
    if (thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" || thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif") {
        return (
            <img src={thumbnail} 
            alt="Random character" 
            style={{objectFit:"contain"}} 
            className="randomchar__img"/>
        )
    } else {
        return (
            <img src={thumbnail} 
            alt="Random character" 
            className="randomchar__img"/>
        )
    }
}

export default ImgObjFit;