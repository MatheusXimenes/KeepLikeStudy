const NotesController = (function(){


    function addNote(...data){

        var ObjectNote = {
            "type": data[1], 
            "title": data[2], 
            "body": data[3], 
            "labels": data[4], 
            "color": data[5], 
            "shared": data[6], 
            "start_in": data[7], 
            "last_modify": data[8]
        }
        var ArrayOfNotes = NotesModel.getArrayOfNotes(data[0]);
        ArrayOfNotes.unshift(ObjectNote);
        NotesModel.setArrayOfNotes(data[0], ArrayOfNotes);
        NotesList.renderListOfNotesInit();
    }

    function editNote(...data){
        //TEST: Args = list, id, ...data
        var ObjectNote = {
            "type": data[2], 
            "title": data[3], 
            "body": data[4], 
            "labels": data[5], 
            "color": data[6], 
            "shared": data[7], 
            "start_in": data[8], 
            "last_modify": data[9]
        }
        var ArrayOfNotes = NotesModel.getArrayOfNotes(data[0]);
        ArrayOfNotes.splice(data[1], 1, ObjectNote); //Remove Item
        NotesModel.setArrayOfNotes(data[0], ArrayOfNotes);
        NotesList.renderListOfNotesInit();
    }
    
    function removeNote(list,id){
        var ArrayOfNotes = NotesModel.getArrayOfNotes(list);
        ArrayOfNotes.splice(id, 1); //Remove Item
        Utilities.log(ArrayOfNotes);
        NotesModel.setArrayOfNotes(list, ArrayOfNotes);
        NotesList.renderListOfNotesInit();
    }
    
    
    
    //NotesControler.addNote('marked', 'text', 'Testing lenght of the title in my little box', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sint. Natus nostrum incidunt aut ipsa sint atque, vel ullam minus pariatur, eveniet distinctio veritatis quibusdam illo esse optio placeat officiis.',["Canada", "Personal"], '',["gueroba@gmail.com"], '2018-01-01 00:00:00', '2018-01-01 00:00:00' )

    return {
        
        addNote: addNote,
        editNote: editNote,
        removeNote: removeNote
    }

})();