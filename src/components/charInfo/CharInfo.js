import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './charInfo.scss';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';
import ImgObjFit from '../blocks/imgObjectFit';
import { Link } from 'react-router-dom';



const CharInfo = (props) => {
    // console.log(props, "props char info");
    // let location = useLocation();
    // console.log(location, "location");
    

    const [char, setChar] = useState(null);
    const { loading, error, getCharacter, clearError } = useMarvelService();

    useEffect(() => {
        updateChar();
        
    },[props.charId])

   const updateChar = () => {
        const {charId} = props;
        if (!charId) {
            return;
        }
        clearError();
        getCharacter(charId)
            .then(onCharLoaded)
    }

   const onCharLoaded = (char) => {
        setChar(char);
    }


   

    const skeleton = char || loading || error ? null : <Skeleton/>; 
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error  || !char) ? <View char={char}/> : null;

    return (
        <div className="char__info">
            {skeleton}
            {errorMessage}
            {spinner}
            {content}        
        </div>
    )
}

const View = ({char}) => {

    const {name, description, homepage, wiki, comics} = char;
    return (
        <>
            <div className="char__basics">
                <ImgObjFit char={char}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : 'There is no comics this character'}
                {
                    comics.map((item, i) => {
                        
                        const comicId = item.resourceURI.slice(43);
                        // eslint-disable-next-line
                        if (i > 9) return;
                        return (
                            <li key={i}
                                className="char__comics-item"
                                onClick={() => {
                            }}>
                                <Link to={`/comics/${comicId}`}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;