import './comicsList.scss';
import useMarvelService from '../../services/MarvelService';
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const setContent = (process, Component, newItemLoading) => {
    switch (process) {
        case 'waiting':
            return <Spinner/>
            // eslint-disable-next-line
            break;
        case 'loading':
            return newItemLoading ? <Component/> : <Spinner/>
            // eslint-disable-next-line
            break;
        case 'confirmed': 
            return <Component/>
            // eslint-disable-next-line
            break;
        case 'error':
            return <ErrorMessage/>
            // eslint-disable-next-line
            break;
        default:
            throw new Error('Unexpected process state');    
    }
}


const ComicsList = () => {

    const [comicsList, setComicsList] = useState([]);
    const [offset, setOffset ] = useState(150);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {process, setProcess, getAllComics} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
        // eslint-disable-next-line
    },[])

    const onRequest = (offset, initial) => {
        console.log("request");
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded)
            .then(() => setProcess('confirmed'));
    }

    const  onComicsListLoaded = (newComicsList) => {
        let ended = false;
        if (newComicsList.length < 8) {
            ended = true;
        }
        setComicsList([...comicsList, ...newComicsList]); 
        setNewItemLoading(false);
        setOffset(offset + 8);
        setComicsEnded(ended);
        // (newComicsList) => [...comicsList, ...newComicsList]
    }

    function renderItems (arr) {
        const items = arr.map(( item, i ) => {
            const {title, thumbnail, price, id} = item;
            return (
                <TransitionGroup component={null}>
                    <CSSTransition  in={true} key={i} timeout={300} classNames="comics__item">
                        <li key={i} className="comics__item">
                            <Link to={`/comics/${id}`}>
                                <img src={thumbnail} alt="ultimate war" className="comics__item-img"/>
                                <div className="comics__item-name">{title}</div>
                                <div className="comics__item-price">{price}</div>
                            </Link>
                        </li>
                    </CSSTransition>
                </TransitionGroup>
            )
        })

        return (
            <ul className='comics__grid'>
                {items}
            </ul>
        )
    }

    const elements = useMemo(() => {
        return setContent(process, () => renderItems(comicsList), newItemLoading)
        // eslint-disable-next-line
    }, [process])

    return (
        <div className="comics__list">
            {/* <TransitionGroup component={null}> */}
                {elements}
            {/* </TransitionGroup> */}
            
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