import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, isLoading}) {
    const avatarRef = React.useRef();
    const submitButton = isLoading ? 'Обновление...' : 'Обновить';


    React.useEffect(() => {
        avatarRef.current.value = '';
    }, [isOpen]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
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
        >
            <label className="popup__label">
                <input
                    className="popup__input"
                    id="link-input"
                    type="url"
                    name="linkAvatar"
                    defaultValue=''
                    placeholder="Ссылка на аватар"
                    required
                    ref={avatarRef}
                />
                <span className="link-input-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;