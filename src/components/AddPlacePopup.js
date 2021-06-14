import React from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace, isLoading}) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');
    const submitButton = isLoading ? 'Сохранение...' : 'Создать';
    React.useEffect(() => {
        setName('');
        setLink('');
    }, [isOpen]);

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    }

    const handleLinkChange = (evt) => {
        setLink(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onAddPlace({name, link})
    }
    return (
        <PopupWithForm
            isOpen={isOpen}
            name="new-card"
            nameButton={submitButton}
            title="Новое место"
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label className="popup__label">
                <input
                    className="popup__input"
                    id="place-input"
                    type="text"
                    name="name"
                    defaultValue=""
                    placeholder="Название"
                    required
                    minLength="2"
                    maxLength="30"
                    onChange={handleNameChange}
                />
                <span className="place-input-error"></span>
            </label>
            <label className="popup__label">
                <input
                    className="popup__input"
                    id="url-input"
                    type="url"
                    name="link"
                    defaultValue=""
                    placeholder="Ссылка на картинку"
                    required
                    onChange={handleLinkChange}
                />
                <span className="url-input-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup;