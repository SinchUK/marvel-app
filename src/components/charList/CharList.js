import useMarvelService from '../../services/MarvelService';
import { useState, useEffect, useRef } from 'react';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import ImgObjFit from '../blocks/imgObjectFit';
import './charList.scss';
// import './charList.css';
import propTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(1541);
    const [charEnded, setCharEnded] = useState(false);

    const { loading, error, getAllCharacters } = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    },[])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded);
    }

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true
        }

        setCharList(charlist => [...charList, ...newCharList]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);
    }
        
    const spinner = loading && !newItemLoading ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage/> : null;
    // const content = !(loading || error) ? <Items onCharSelected={props.onCharSelected} charlist={charList}/> : null;
    return (
        <div className="char__list">
            <div className='char__loading'>
                {errorMessage}
                {spinner}
            </div>
            <ul className="char__grid">
                <TransitionGroup component={null} >
                    <Items onCharSelected={props.onCharSelected} charlist={charList} />
                </TransitionGroup>
            </ul>
            <button 
                className="button button__main button__long"
                onClick={() => onRequest(offset)}
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block'}}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

const Items = (props) => {

    const [charId, setCharId] = useState(null);
    // const [selected, setSelect] = useState(false);
    const [isFocused, setFocus] = useState(false);

    const onItemSelected = (id, elem) => {
        setCharId(id);
        // setSelect(true);
        setFocus(true);
    }

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }


    return (
        props.charlist.map((item, i) => {
            const {id, name} = item;
            // console.log(comics, "item from props");
            let classNames = 'char__item';
            if (id === charId && isFocused) {
                classNames += ' char__item_selected';
            }
        
            return (
                <CSSTransition in={true} key={id} timeout={300} classNames="char__item">
                    <li className={classNames}
                        key={id}
                        ref={el => itemRefs.current[i] = el}
                        onClick={() => {
                            props.onCharSelected(id);
                            onItemSelected(id);
                        }}
                        tabIndex='0'
                        onKeyPress={(e) => { 
                            if (e.key === ' ' || e.key === "Enter") {
                                props.onCharSelected(id);
                                focusOnItem(i);
                            }}}>
                        <ImgObjFit char={item} alt={name}/>
                        <div className="char__name">{name}</div>
                    </li>
                </CSSTransition>
            )
        })
    )
}

CharList.propTypes = {
    onCharSelected: propTypes.func.isRequired
}

export default CharList;