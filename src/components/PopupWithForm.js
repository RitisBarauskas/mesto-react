import React from 'react';

function PopupWithForm({name, title, children, nameButton, isOpen, onClose, onSubmit}) {


    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}   >
            <div className="popup__container">
                <h2 className="popup__title">
                {title}
                </h2> 
                <form className="popup__form" name={`${name}`} onSubmit={onSubmit}>
                {children}
                <input className="popup__button" type="submit" value={nameButton} />
                </form>
                <button type="button" className="popup__close" onClick={onClose}></button>
            </div>             
        </div>
    );
}

export default PopupWithForm;