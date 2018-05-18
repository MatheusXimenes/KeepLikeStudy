const app = (function(){

    //AppData
    var userData = LocalStorage.getData('app-notes-user') || {};
    var listNotesPin = LocalStorage.getData('app-notes-list-pin') || [];
    var listNotesOthers = LocalStorage.getData('app-notes-list-other') || [];
    var listNotesArchieved = LocalStorage.getData('app-notes-list-archieved') || [];
    

    //AppMount
    const $listNotesPin = document.querySelector('[data-js="note-list-marked"]');
    const $listNotesOthers = document.querySelector('[data-js="note-list-others"]');
    
    const $inFilter = document.querySelector('[data-js="filter"]');
    const $outFilter = document.querySelectorAll('[data-js-filter="apply-filter"]');
    const $header = document.querySelector("[data-js=header]");
    const $btnNav = document.querySelector("[data-js=button-nav]");
    const $user = document.querySelector("[data-js=user]");

    //Init App
    const appInit = (function appInit(){
        User.initUser($user, userData);
        LabelView.renderLabelListNavigation();
        NotesList.renderListOfNotesInit();
        Filter.initFilter($inFilter, $outFilter);
        Header.initHeader($header);
        Navigation.initNavigation($btnNav);
        NotesView.addEventNewNote();
    })();


})();