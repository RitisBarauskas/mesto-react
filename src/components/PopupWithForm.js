import React from 'react';

function PopupWithForm(props, children) {


    return (
        <div className={`popup popup_type_${props.name}`}   >
            <div className="popup__container">
                <h2 className="popup__title">
                {props.title}
                </h2> 
                <form className="popup__form" name={`${props.name}`}>
                {children}
                <input className="popup__button" type="submit" value="Сохранить" />
                </form>
                <button type="button" className="popup__close"></button>
            </div>             
        </div>
    );
}

export default PopupWithForm;