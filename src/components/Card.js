import React from 'react';

function Card({card, onCardClick}) {

    return(
        <li className="places__item element">
            <button type="button" className="element__trash"></button>
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