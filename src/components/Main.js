
function Main() {
    return (
        <main class="main">
            <section class="profile">
                <div class="profile__group">
                    <div class="profile__avatar">
                        <div class="profile__edit-avatar"></div>
                    </div>            
                    <div class="profile__info">
                        <h1 class="profile__title"></h1>
                        <button type="button" class="profile__edit-button"></button>
                        <p class="profile__subtitle"></p>
                    </div>
                </div>
                <button type="button" class="profile__add-button"></button>
            </section>
            <section class="places">
                <ul class="places__list">            
                </ul>
            </section>
        </main>
    );
  }
  
  export default Main