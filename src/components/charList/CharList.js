import useMarvelService from '../../services/MarvelService';
import { useState, useEffect, useRef, useMemo } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import propTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';

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


const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const { getAllCharacters, process, setProcess } = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
        // eslint-disable-next-line
    },[])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded)
            .then(() => setProcess('confirmed'))
    }

    const onCharListLoaded = async (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        setCharList([...charList, ...newCharList]);
        setNewItemLoading(false);
        setOffset(offset + 9);
        setCharEnded(ended);
    }
        
    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    function renderItems (arr) {
        const items = arr.map((item, i) => {
            let imgStyle = {'objectFit': 'cover'};

            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit': 'unset'};
            }

            return (
                <CSSTransition key={item.id} timeout={300} classNames='char__item'>
                    <li className='char__item'
                        tabIndex={0}
                        ref={el => itemRefs.current[i] = el}
                        onClick={() => {
                            props.onCharSelected(item.id);
                            focusOnItem(i);
                        }}
                        onKeyPress={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                props.onCharSelected(item.id);
                                focusOnItem(i);
                            }
                        }}>
                            <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                            <div className='char__name'>{item.name}</div>
                    </li>
                </CSSTransition>
            )
        });

        return (
            <ul className='char__grid'>
                <TransitionGroup component={null}>
                    {items}
                </TransitionGroup>
            </ul>
        )
    }

    // const items = renderItems(charList)
    // const spinner = loading && !newItemLoading ? <Spinner/> : null;
    // const errorMessage = error ? <ErrorMessage/> : null;
    
    // const content = !(loading || error) ? <Items onCharSelected={props.onCharSelected} charlist={charList}/> : null;
    const elements = useMemo(() => {
        return setContent(process, () => renderItems(charList), newItemLoading)
        // eslint-disable-next-line
    }, [process]);

    return (
        <div className="char__list">
            <div className='char__loading'></div>
            {elements}
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

// const Items = (props) => {

//     const [charId, setCharId] = useState(null);
//     // const [selected, setSelect] = useState(false);
//     const [isFocused, setFocus] = useState(false);

//     const onItemSelected = (id, elem) => {
//         setCharId(id);
//         // setSelect(true);
//         setFocus(true);
//     }

   


//     return (
//         props.charlist.map((item, i) => {
//             const {id, name} = item;
//             // console.log(comics, "item from props");
//             let classNames = 'char__item';
//             if (id === charId && isFocused) {
//                 classNames += ' char__item_selected';
//             }
        
//             return (
//                 <CSSTransition in={true} key={id} timeout={300} classNames="char__item">
//                     <li className={classNames}
//                         key={id}
//                         ref={el => itemRefs.current[i] = el}
//                         onClick={() => {
//                             props.onCharSelected(id);
//                             onItemSelected(id);
//                         }}
//                         tabIndex='0'
//                         onKeyPress={(e) => { 
//                             if (e.key === ' ' || e.key === "Enter") {
//                                 props.onCharSelected(id);
//                                 focusOnItem(i);
//                             }}}>
//                         <ImgObjFit char={item} alt={name}/>
//                         <div className="char__name">{name}</div>
//                     </li>
//                 </CSSTransition>
//             )
//         })
//     )
// }

CharList.propTypes = {
    onCharSelected: propTypes.func.isRequired
}

export default CharList;