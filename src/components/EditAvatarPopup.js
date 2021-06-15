import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, isLoading}) {
    const avatarRef = React.useRef();
    const [isValid, setIsValid] = React.useState(true);
    const [validMessage, setValidMessage] = React.useState('')
    const submitButton = isLoading ? 'Обновление...' : 'Обновить';

    React.useEffect(() => {
        avatarRef.current.value = '';
        setIsValid(true);
        setValidMessage('');
    }, [isOpen]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    const handleChangeLink = (evt) => {
        setValidMessage(evt.target.validationMessage);
        setIsValid(evt.target.validationMessage ? true : false);
    }

    return (
        <PopupWithForm
            isOpen={isOpen}
            name="edit-avatar"
            nameButton={submitButton}
            title="Обновить аватар"
            onClose={onClose}
            onSubmit={handleSubmit}
            buttonTitle={submitButton}
            submitDisabled={isValid}
        >
            <label className="popup__label">
                <input
                    className="popup__input"
                    id="link-input"
                    type="url"
                    name="linkAvatar"
                    defaultValue=""
                    placeholder="Ссылка на аватар"
                    required
                    ref={avatarRef}
                    onChange={handleChangeLink}
                />
                <span className="link-input-error popup__error popup__error_visible">{validMessage}</span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;