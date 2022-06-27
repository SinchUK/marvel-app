import './comicsList.scss';
import useMarvelService from '../../services/MarvelService';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const ComicsList = () => {

    const [comicsList, setComicsList] = useState([]);
    const [offset, setOffset ] = useState(1000);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {loading, error, getAllComics} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    },[])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded);
    }

    const  onComicsListLoaded = (newComicsList) => {
        let ended = false;
        if (newComicsList.length < 8) {
            ended = true;
        }
        setNewItemLoading(newItemLoading => false);
        setComicsList([...comicsList, ...newComicsList]); 

        setOffset(offset => offset + 8);
        setComicsEnded(comicsEnded => ended);
        // (newComicsList) => [...comicsList, ...newComicsList]
    }

    function renderItems (arr) {
        const items = arr.map(( item, i ) => {
            const {title, thumbnail, price, id} = item;
            return (
                <li key={i} className="comics__item">
                    <Link to={`/comics/${id}`}>
                        <img src={thumbnail} alt="ultimate war" className="comics__item-img"/>
                        <div className="comics__item-name">{title}</div>
                        <div className="comics__item-price">{price}</div>
                    </Link>
                </li>
            )
        })

        return (
            <ul className='comics__grid'>
                {items}
            </ul>
        )
    }

    const items = renderItems(comicsList);

    const spinner = loading && !newItemLoading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;

    return (
        <div className="comics__list">
            <div className='comimcs__loading'>
                {errorMessage}
                {spinner}
            </div>
            {items}
            <button 
                className="button button__main button__long"
                style={{'display': comicsEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}
                disabled={newItemLoading}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}


export default ComicsList;