import React from 'react';
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser, isLoading}) {
    const currentUser = React.useContext(CurrentUserContext);
    const submitButton = isLoading ? 'Обновление...' : 'Редактировать';
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    }

    const handleDescriptionChange = (evt) => {
        setDescription(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            isOpen={isOpen}
            name="edit-profile"
            nameButton={submitButton}
            title="Редактировать профиль"
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label className="popup__label">
                <input
                    className="popup__input"
                    id="name-input"
                    type="text"
                    name="title"
                    defaultValue={name}
                    placeholder="Имя"
                    required
                    maxLength="40"
                    minLength="2"
                    onChange={handleNameChange}
                />
                <span className="name-input-error"></span>
            </label>
            <label className="popup__label">
                <input
                    className="popup__input"
                    id="profession-input"
                    type="text"
                    name="subtitle"
                    defaultValue={description}
                    placeholder="Профессия"
                    required
                    minLength="2"
                    maxLength="200"
                    onChange={handleDescriptionChange}
                />
                <span className="profession-input-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default EditProfilePopup;