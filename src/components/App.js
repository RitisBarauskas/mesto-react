import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div class="body">
      <div class="page">        
        <Header />
        <Main />        
        <Footer />
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
        <div class="popup popup_edit-avatar">
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
        <div class="popup popup_view-pic">               
          <div class="popup__container popup__container_view-pic">
            <h2 class="popup__title popup__title_view-pic">
            </h2>
            <img src="#" alt="#" class="popup__image" />
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
  </div>
  );
}

export default App;
