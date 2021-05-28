function PopupWithForm(props, children) {


    return (
        <div className={`popup popup_type_${props.name}`}   >
            <div class="popup__container">
                <h2 class="popup__title">
                {props.title}
                </h2> 
                <form class="popup__form" name={`${props.name}`}>
                {children}
                <input class="popup__button" type="submit" value="Сохранить" />
                </form>
                <button type="button" class="popup__close"></button>
            </div>             
        </div>
    );
}

export default PopupWithForm;