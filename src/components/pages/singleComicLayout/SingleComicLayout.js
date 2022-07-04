import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import './SingleComicLayout.scss';


const SingleComicLayout = ({ data }) => {
    
    const {title, thumbnail, description, pageCount, language, price, id} = data;
    
    
    return (
        <div className="single-comic">
            <Helmet>
                <meta
                    name="description"
                    content={`${title} comics book`}/>
                <title>{title}</title>
            </Helmet>
            <CSSTransition in={true} appear={true} key={id} timeout={500} classNames='single-comic__img'>
                <img src={thumbnail} alt={title} className="single-comic__img"/>
            </CSSTransition> 
            <CSSTransition in={true} appear={true} key={id} timeout={500} classNames="single-comic__info">
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

export default SingleComicLayout;