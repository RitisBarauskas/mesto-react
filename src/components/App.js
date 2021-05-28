import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';

function App() {
    const [data, setData] = React.useState([]);
    const [card, setCard] = React.useState(false);
    const [profile, setProfile] = React.useState([]);
    const [isEditProfilePopupOpen, setFormProfile] = React.useState(false);
    const [isAddPlacePopupOpen, setAddCard] = React.useState(false);
    const [isEditAvatarPopupOpen, setAvatar] = React.useState(false);
    React.useEffect(() => {
        api.getInitialData().then(data => {
            setData(data[0]);
            setProfile(data[1]);
        }).catch((err) => console.log(err));

    }, [])
    
    const onCardClick = card => setCard(card);
    const onClose = () => setCard(null);

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
    <div class="body">
      <div class="page">        
        <Header />
        <Main 
            cards={data}
            onCardClick={onCardClick} 
            profile={profile}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
        />        
        <Footer />          
      </div>
      <ImagePopup card={card} onClose={onClose} />
      {/* <PopupWithForm /> */}
      <div class="popup popup_edit-profile">
            <div class="popup__container">
                <h2 class="popup__title">
                Редактировать профиль
                </h2> 
                <form class="popup__form" name="profile-form">
                <label class="popup__label">
                    <input class="popup__input" id="name-input" type="text" name="title" value="" placeholder="Имя" required maxlength="40" minlength="2" />
                    <span class="name-input-error"></span>
                </label>
                <label class="popup__label">
                    <input class="popup__input" id="profession-input" type="text" name="subtitle" value="" placeholder="Профессия" required minlength="2" maxlength="200" />
                    <span class="profession-input-error"></span>
                </label>
                <input class="popup__button" type="submit" value="Сохранить" />
                </form>
                <button type="button" class="popup__close"></button>
            </div>             
        </div>
        <div className="popup popup_edit-avatar">
            <div class="popup__container">
                <h2 class="popup__title">
                Обновить аватар
                </h2> 
                <form class="popup__form" name="avatar-form">
                <label class="popup__label">
                    <input class="popup__input" id="link-input" type="url" name="linkAvatar" value="" placeholder="Ссылка на аватар" required />
                    <span class="link-input-error"></span>
                </label>
                <input class="popup__button popup__button_disabled" type="submit" value="Сохранить" />
                </form>
                <button type="button" class="popup__close"></button>
            </div>             
        </div>
        <div class="popup popup_new-card">
            <div class="popup__container">
                <h2 class="popup__title">
                Новое место
                </h2> 
                <form class="popup__form" name="new-place">
                <label class="popup__label">
                    <input class="popup__input" id="place-input" type="text" name="name" value="" placeholder="Название" required minlength="2" maxlength="30" />
                    <span class="place-input-error"></span>
                </label>
                <label class="popup__label">
                    <input class="popup__input" id="url-input" type="url" name="link" value="" placeholder="Ссылка на картинку" required />
                    <span class="url-input-error"></span>
                </label>
                <input class="popup__button popup__button_disabled" type="submit" value="Создать" />
                </form>
                <button type="button" class="popup__close"></button>
            </div>             
        </div>
        <div class="popup popup_delete-card">               
            <div class="popup__container popup__container_delete-card">
                <h2 class="popup__title popup__title_delete-card">
                Вы уверены?
                </h2>
                <form class="popup__form popup__form_delete-card" name="delete-card">
                <input type="hidden" value="" id="id-card" />
                <input class="popup__button popup__button_delete-card" type="submit" value="Да" />
                </form>
                <button type="button" class="popup__close"></button>
            </div>
        </div>
    </div>
  );
}

export default App;
