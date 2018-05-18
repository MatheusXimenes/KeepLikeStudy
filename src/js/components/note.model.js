/*
    ## Note Component Model ##
    v.1.0
        - Handle with data on Notes;
    v.1.1
        TODO (Try better use of MVC Segregation);
*/

const NotesModel = (function(){

    const listMarked = 'app-notes-list-pin';
    const listOthers = 'app-notes-list-other';

    function getArrayOfNotes(type){
        return ArrayOfNotes = type === 'marked' ? LocalStorage.getData(listMarked) : LocalStorage.getData(listOthers) ;
    }
    
    function setArrayOfNotes(type, data){
        type === 'marked' ? LocalStorage.setData(listMarked, data) : LocalStorage.setData(listOthers, data) ;
    }

    /* var ObjectNote = {
        "type": data[1], 
        "title": data[2], 
        "body": data[3], 
        "labels": data[4], 
        "color": data[5], 
        "shared": data[6], 
        "start_in": data[7], 
        "last_modify": data[8]
    } */

    return {
        getArrayOfNotes: getArrayOfNotes,
        setArrayOfNotes: setArrayOfNotes
    }
})();