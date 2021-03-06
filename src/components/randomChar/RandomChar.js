import { useEffect, useState } from 'react';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import ImgObjFit from '../blocks/imgObjectFit';
import mjolnir from '../../resources/img/mjolnir.png';
import './randomChar.scss';

const RandomChar = () => {

    const [char, setChar] = useState({});
    const { getCharacter, clearError, process, setProcess } = useMarvelService();

    useEffect(()=> {
        updateChar();
        const timerId = setInterval(updateChar, 60000);

        return () => {
            clearInterval(timerId)
        }
        // eslint-disable-next-line
    }, [])

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getCharacter(id)
            .then(onCharLoaded)
            .then(() =>setProcess('confirmed'));
    }

    // const errorMessage = error ? <ErrorMessage/> : null;
    // const spinner = loading ? <Spinner/> : null;
    // const content = !(loading || error) ? <View char={char}/> : null;
    
    return (
        <div className="randomchar">
            {setContent(process, View, char)}
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button className="button button__main">
                    <div className="inner"
                           onClick={updateChar}>try it
                    </div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
    )
}

const View = ({ data }) => {
    const {name, description, homepage, wiki} = data;
    
    return (
            <div className="randomchar__block">
                <ImgObjFit char={data}/>
                <div className="randomchar__info">
                    <p className="randomchar__name">{name}</p>
                    <p className="randomchar__descr">
                        {description}
                    </p>
                    <div className="randomchar__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
    )
}

// const Img = ({char}) => {
//     const {thumbnail} = char;
    
//     if (thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
//         return (
//             <img src={thumbnail} alt="Random character" style={{objectFit:"contain"}} className="randomchar__img"/>
//         )
//     } else {
//         return (
//             <img src={thumbnail} alt="Random character" className="randomchar__img"/>
//         )
//     }
// }

export default RandomChar;