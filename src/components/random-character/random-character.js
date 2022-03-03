import './random-character.css';


const RandomCharacter = () => {
    return (
        <div className="random-character_block">
            <div className="random-character_info">
                <img src="./img/avatar.png" alt="character avatar"/>
                <div className="random-character_content">
                    <p className="random-character_name">THOR</p>
                    <p>As the Norse God of thunder and lightning, Thor 
                       wields one of the greatest weapons ever made, the 
                       enchanted hammer Mjolnir. While others have described 
                       Thor as an over-muscled, oafish imbecile, he's quite smart 
                       and compassionate...
                    </p>
                    <div className="random-character_links">
                        <a href="#" alt="home page link">
                            <div className="btn-red">HOME PAGE</div>
                        </a>
                        <a href="#" alt="characters wiki link">
                            <div className="btn-gray">WIKI</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="random-character_static">
                <div className="random-character_static-inner">
                    <div className="random-character_static-title">
                        <p>Random character for today!</p>
                        <p>Do you want to get to know him better?</p>
                    </div>
                    <div className="random-character_static-content">
                        <p>Or choose another one</p>
                        <a href="#" alt="home page link">
                            <div className="btn-red">TRY IT</div>
                        </a>
                    </div>
                    <img className="random-character_static-img" src="./img/mjolnir.png" alt="axe"/>
                </div>
            </div>
        </div>
    )
}

export default RandomCharacter;