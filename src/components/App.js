import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';

function App() {
    const [data, setData] = React.useState([]);
    const [selectedCard, setCard] = React.useState(false);
    const [profile, setProfile] = React.useState([]);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    React.useEffect(() => {
        api.getInitialData().then(data => {
            setData(data[0]);
            setProfile(data[1]);
        }).catch((err) => console.log(err));

    }, [])
    
    const handleCardClick = (card) => setCard(card);
    const closeAllPopups = () => {
        setCard(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
    };

    const handleEditAvatarClick = () => {
        setEditAvatarPopupOpen(true);
    }

    const handleEditProfileClick = () => {
        setEditProfilePopupOpen(true);
    }

    const handleAddPlaceClick = () => {
        setAddPlacePopupOpen(true);
    }

  return (
    <div className="body">
      <div className="page">        
        <Header />
        <Main 
            cards={data}
            onCardClick={handleCardClick} 
            profile={profile}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
        />        
        <Footer />          
      </div>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm 
        isOpen={isEditAvatarPopupOpen} 
        name="edit-avatar"
        nameButton="Сохранить"
        title="Обновить аватар"
        onClose={closeAllPopups}
      >
        <label className="popup__label">
            <input className="popup__input" id="link-input" type="url" name="linkAvatar" defaultValue="" placeholder="Ссылка на аватар" required />
            <span className="link-input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm 
        isOpen={isAddPlacePopupOpen} 
        name="new-card"
        nameButton="Создать"
        title="Новое место"
        onClose={closeAllPopups}
      >
        <label className="popup__label">
            <input className="popup__input" id="place-input" type="text" name="name" defaultValue="" placeholder="Название" required minLength="2" maxLength="30" />
            <span className="place-input-error"></span>
        </label>
        <label className="popup__label">
            <input className="popup__input" id="url-input" type="url" name="link" defaultValue="" placeholder="Ссылка на картинку" required />
            <span className="url-input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm 
        isOpen={isEditProfilePopupOpen} 
        name="edit-profile"
        nameButton="Сохранить"
        title="Редактировать профиль"
        onClose={closeAllPopups}
      >
        <label className="popup__label">
            <input className="popup__input" id="name-input" type="text" name="title" defaultValue="" placeholder="Имя" required maxLength="40" minLength="2" />
            <span className="name-input-error"></span>
        </label>
        <label className="popup__label">
            <input className="popup__input" id="profession-input" type="text" name="subtitle" defaultValue="" placeholder="Профессия" required minLength="2" maxLength="200" />
            <span className="profession-input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm 
        name="delete-card"
        nameButton="Да"
        title="Вы уверены?"
        onClose={closeAllPopups}
      >
        <input type="hidden" value="" id="id-card" />
      </PopupWithForm>
    </div>
  );
}

export default App;
