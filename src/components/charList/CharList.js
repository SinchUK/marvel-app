import MarvelService from '../../services/MarvelService';
import React, { Component } from 'react/cjs/react.development';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import ImgObjFit from '../blocks/imgObjectFit';
import './charList.scss';


class CharList extends React.Component {

    state = {
        charList: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 1541,
        charEnded: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError);
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true
        }

        this.setState(({charList, offset}) => ({
                charList: [...charList, ...newCharList],
                loading: false,
                newItemLoading: false,
                offset:  offset + 9,
                charEnded: ended
            }));
    }
        
    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }
   
    render() {
        const {charList, loading, error, offset,charEnded, newItemLoading} = this.state;

        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMessage/> : null;
        const content = !(loading || error) ? <Items onCharSelected={this.props.onCharSelected} charlist={charList}/> : null;

        return (
            <div className="char__list">
                <ul className="char__grid">
                    {errorMessage}
                    {spinner}
                    {content}
                </ul>
                <button 
                    className="button button__main button__long"
                    onClick={() => this.onRequest(offset)}
                    disabled={newItemLoading}
                    style={{'display': charEnded ? 'none' : 'block'}}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

class Items extends Component {
    state = {
        id: null,
        selected: false,
        isFocused: false
    }


    onItemSelected = (id, elem) => {
        this.setState({
            selected: true,
            isFocused: true,
            id: id
        })

    }

    itemRefs = [];

    setRef = (ref) => {
        this.itemRefs.push(ref);
    }

    focusOnItem = (id) => {
        console.log(id, 'focus');
        this.itemRefs.forEach(item => item.classList.remove('char__item_selected'));
        this.itemRefs[id].classList.add('char__item_selected');
        this.itemRefs[id].focus();
    }

    render () {
       
        const {charlist, onCharSelected} = this.props;

        return (
            charlist.map((item, i) => {
                const {id, name} = item;

                let classNames = 'char__item';
                if (id === this.state.id && this.state.isFocused) {
                    classNames += ' char__item_selected';
                }
                
                return (
                    <li className={classNames}
                        key={id}
                        ref={this.setRef}
                        onClick={() => {
                            onCharSelected(id);
                            this.onItemSelected(id);
                        }}
                        tabIndex='0'
                        onKeyPress={(e) => { 
                            if (e.key === ' ' || e.key === "Enter") {
                                this.props.onCharSelected(id);
                                this.focusOnItem(i);
                            }}}>
                        <ImgObjFit char={item} alt={name}/>
                        <div className="char__name">{name}</div>
                    </li>
                )
            })
        )
    }
}

export default CharList;