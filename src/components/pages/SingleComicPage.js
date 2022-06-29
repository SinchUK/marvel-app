import './singleComicPage.scss';
import  useMarvelService  from '../../services/MarvelService';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import AppBanner from '../appBanner/AppBanner';
import { CSSTransition } from 'react-transition-group';


const SingleComicPage = () => {    

    const {comicId} = useParams();
    const [comic, setComic] = useState(null);
    const [inProp, setInProp] = useState(false);

    const { loading, error, getComic, clearError } = useMarvelService();


    useEffect(() => {
        updateComic();
    },[comicId])

   const updateComic = () => { 
        clearError();
        getComic(comicId)
            .then(onComicLoaded)
    }

   const onComicLoaded = (comic) => {
        setComic(comic);
        setInProp(true);
    }

    const spinner = loading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
    const content = !(loading || error  || !comic) ? <View inProp={inProp} comic={comic}/> : null;

    return (
        <>
            <AppBanner/>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({comic, inProp}) => {
    // console.log(comic, "comic");
    const {title, thumbnail, description, pageCount, language, price, id} = comic;
    return (
        <div className="single-comic">
            <CSSTransition in={inProp} key={id} timeout={300} classNames='single-comic__img'>
                <img src={thumbnail} alt={title} className="single-comic__img"/>
            </CSSTransition> 
            <CSSTransition in ={inProp} timeout={300} classNames="single-comic__info">
                <div className="single-comic__info">
                    <h2 className="single-comic__name">{title}</h2>
                    <p className="single-comic__descr">{description}</p>
                    <p className="single-comic__descr">Pages: {pageCount}</p>
                    <p className="single-comic__descr">Language: {language}</p>
                    <div className="single-comic__price">Price: {price}</div>
                </div>
            </CSSTransition>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
        </div>
    )
}

export default SingleComicPage;