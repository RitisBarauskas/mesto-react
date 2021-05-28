import React from 'react';
import Card from './Card';

function Main({cards, onCardClick}) {
    const handleEditAvatarClick = () => {
        console.log('hi');
        const popup = document.querySelector('.popup_edit-avatar');
        popup.classList.add('popup_opened');
    }

    const handleEditProfileClick = () => {
        console.log('hi');
        const popup = document.querySelector('.popup_edit-profile');
        popup.classList.add('popup_opened');
    }

    const handleAddPlaceClick = () => {
        console.log('hi');
        const popup = document.querySelector('.popup_new-card');
        popup.classList.add('popup_opened');
    }
    
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__group">
                    <div className="profile__avatar">
                        <div className="profile__edit-avatar" onClick={handleEditAvatarClick}></div>
                    </div>            
                    <div className="profile__info">
                        <h1 className="profile__title"></h1>
                        <button type="button" className="profile__edit-button" onClick={handleEditProfileClick}></button>
                        <p className="profile__subtitle"></p>
                    </div>
                </div>
                <button type="button" className="profile__add-button" onClick={handleAddPlaceClick}></button>
            </section>
            <section className="places">
                <ul className="places__list">
                    
                    {cards.map((card, i) => <Card key={i} card={card} onCardClick={onCardClick} />)}      
                </ul>
            </section>
            
        </main>        
    );
  }
  
  export default Main;