/*
    ## Notelist Component ##
    v.1.0
        - Rende List of Notes (Marked or not);
*/

const NotesList = (function(){

    const $listNotesMarked = document.querySelector('[data-js="note-list-marked"]');
    const $listNotesOthers = document.querySelector('[data-js="note-list-others"]');

    //Show Pin Notes
    const renderListOfNotes = function(type, notes){
        //Utilities.log(notes);
        type === 'marked' ? $listNotesMarked.innerHTML = '' : $listNotesOthers.innerHTML = '';
        notes.forEach((element, index) => type === 'marked'? $listNotesMarked.innerHTML += NotesView.renderNote(element, index) :  $listNotesOthers.innerHTML += NotesView.renderNote(element, index));
        NotesView.addEventNotes();
    }

    const renderListOfNotesInit = function(){
        
        var listNotesPin = LocalStorage.getData('app-notes-list-pin') || [];
        var listNotesOthers = LocalStorage.getData('app-notes-list-other') || [];
        
        renderListOfNotes('marked', listNotesPin);
        //console.table(listNotesPin);

        renderListOfNotes('others', listNotesOthers);
        //console.table(listNotesOthers);
    }
    
    return {
        renderListOfNotes : renderListOfNotes,
        renderListOfNotesInit: renderListOfNotesInit
    };

})();