import React from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace, isLoading}) {
    const [nameInput, setNameInput] = React.useState({
        value: '',
        validError: '',
        isValid: true
    });
    const [linkInput, setLinkInput] = React.useState({
        value: '',
        validError: '',
        isValid: true
    });
    const submitButton = isLoading ? 'Сохранение...' : 'Создать';
    React.useEffect(() => {
        setNameInput({
            value: '',
            validError: '',
            isValid: true
        });
        setLinkInput({
            value: '',
            validError: '',
            isValid: true
        });
    }, [isOpen]);

    const handleNameChange = (evt) => {
        setNameInput({
            value: evt.target.value,
            validError: evt.target.validationMessage,
            isValid: (evt.target.validationMessage ? true : false)
        });
    }

    const handleLinkChange = (evt) => {
        setLinkInput({
            value: evt.target.value,
            validError: evt.target.validationMessage,
            isValid: (evt.target.validationMessage ? true : false)
        });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const name = nameInput.value;
        const link = linkInput.value;
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
            submitDisabled={(linkInput.isValid || nameInput.isValid)}
        >
            <label className="popup__label">
                <input
                    className="popup__input"
                    id="place-input"
                    type="text"
                    name="name"
                    value={nameInput.value}
                    placeholder="Название"
                    required
                    minLength="2"
                    maxLength="30"
                    onChange={handleNameChange}
                />
                <span className="place-input-error popup__error popup__error_visible">{nameInput.validError}</span>
            </label>
            <label className="popup__label">
                <input
                    className="popup__input"
                    id="url-input"
                    type="url"
                    name="link"
                    value={linkInput.value}
                    placeholder="Ссылка на картинку"
                    required
                    onChange={handleLinkChange}
                />
                <span className="url-input-error popup__error popup__error_visible">{linkInput.validError}</span>
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup;