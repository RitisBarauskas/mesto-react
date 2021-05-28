import React from 'react';
import Card from './Card';

function Main({cards, onCardClick, profile, onEditProfile, onAddPlace, onEditAvatar}) {
    
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__group">
                    <div className="profile__avatar" >
                        <div className="profile__edit-avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${profile.avatar})` }} ></div>
                    </div>            
                    <div className="profile__info">
                        <h1 className="profile__title">{profile.name}</h1>
                        <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
                        <p className="profile__subtitle">{profile.about}</p>
                    </div>
                </div>
                <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
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