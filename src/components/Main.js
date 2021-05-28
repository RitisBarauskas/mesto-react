
function Main() {
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
        <main class="main">
            <section class="profile">
                <div class="profile__group">
                    <div class="profile__avatar">
                        <div class="profile__edit-avatar" onClick={handleEditAvatarClick}></div>
                    </div>            
                    <div class="profile__info">
                        <h1 class="profile__title"></h1>
                        <button type="button" class="profile__edit-button" onClick={handleEditProfileClick}></button>
                        <p class="profile__subtitle"></p>
                    </div>
                </div>
                <button type="button" class="profile__add-button" onClick={handleAddPlaceClick}></button>
            </section>
            <section class="places">
                <ul class="places__list">            
                </ul>
            </section>
            
        </main>        
    );
  }
  
  export default Main;