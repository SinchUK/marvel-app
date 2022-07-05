import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";


import './SingleCharacterLayout.scss';




const SingleCharacterLayout = ({ data }) => {
    
    const { description, thumbnail, name, id } = data;

    return (
        <div className="single-char">
            <Helmet>
                <meta
                    name="description"
                    content={`${name} - marvel character info`}/>
                <title>{name}</title>
            </Helmet>
            <CSSTransition in={true} appear={true} key={id} timeout={300} classNames='single-char__img'>
                <img src={thumbnail} alt="title" className="single-char__img"/>
            </CSSTransition>
            <CSSTransition in={true} appear={true} timeout={300} classNames="single-char__info">
                <div className="single-char__info">
                    <p className="single-char__name">{name}</p>
                    <p className="single-char__descr">{description}</p>
                </div>
            </CSSTransition>
            <Link to="/" className="single-char__back">Back to Home Page</Link>
        </div>
    )
}

export default SingleCharacterLayout;