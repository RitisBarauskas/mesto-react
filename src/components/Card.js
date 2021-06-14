import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card({card, onCardClick}) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `element__trash ${isOwn ? 'element__trash_visible' : 'element__trash_hidden'}`
    );

    return(
        <li className="places__item element">
            <button type="button" className={cardDeleteButtonClassName}></button>
            <img src={card.link} alt={card.name} className="element__image" onClick={_ => onCardClick(card)}/>
            <div className="element__info">
                <h2 className="element__title">{card.name}</h2>        
                <div className="element__likes">
                <button type="button" className="element__like"></button>
                <div className="element__likes-count">{card.likes.length}</div>
                </div>
            </div>
        </li>
    );
}

export default Card;