/*
    ## Note Component View ##
    v.1.0
        - Handle with render of an new Note and his life cycle;
        - Handle with all note render;
    v.1.1
        TODO (Try better use of MVC Segregation);
*/

const NotesView = (function(){
    const $modalBackground = document.querySelector('[data-js="modal-notes-background"]');
    const $newNote = document.querySelector('[data-js="new-note"]');
    const $mainNotes = document.querySelector('[data-js="main-notes"]');
    const $newNoteCreator = document.querySelector('[data-js="new-note-creator"]');


    function addEventNewNote(){
        $newNoteCreator.addEventListener('click', handlerClickNote);
    }

    function handlerClickNote(){
        $newNote.classList.add('new-note--expanded');
        addEventToWindowOnNewNoteClick();
    }
    
    function addEventToWindowOnNewNoteClick(){
        const $buttonDone = $newNote.querySelector('[data-js="button-done"]');
        $buttonDone.addEventListener('click', handlerAddNewNote, true);
        window.addEventListener('click', handlerCloseNewNote, true);
    }

    function handlerAddNewNote(){
        const place = 'marked';
        const type = 'text';
        const title = $newNote.querySelector('[data-js="note-title"]').innerHTML;
        const body = $newNote.querySelector('[data-js="new-note-creator"]').innerHTML;
        const labels = '';
        const color = 'default';
        const shared = '';
        const start_in = new Date();
        const last_modify = new Date();
        NotesController.addNote(place, type, title, body, labels, color, shared, start_in, last_modify);
        closeNewNote();
    }

    function handlerCloseNewNote(){
        let e = window.event || event;
        if(!$newNote.contains(e.target)) {
            $newNote.classList.remove('new-note--expanded');
            window.removeEventListener('click', handlerCloseNewNote, true);
        }
    }


    function closeNewNote(){
        $newNote.classList.remove('new-note--expanded');
        $newNote.querySelector('[data-js="note-title"]').innerHTML = 'Title';
        $newNote.querySelector('[data-js="new-note-creator"]').innerHTML = 'Take a note...';
    }



    //Map All Notes and Add events
    function addEventNotes() {
        
        const $notes = document.querySelectorAll('[data-js="note"]');
        
        $notes.forEach (function(element){
            element.addEventListener( 'click' ,  handlerClickNote );
        });
        
        //Handler Click Note 
        function handlerClickNote(){
            if (!this.classList.contains('note-container-expanded')  ) {
                this.classList.add('note-container-expanded');
                this.querySelector('[data-js=note-title]').setAttribute('contentEditable','true');
                this.querySelector('[data-js=note-body]').setAttribute('contentEditable','true');
                $modalBackground.style.display = 'block';
            }
        }

        window.onclick = function(event) {
            if (event.target == $modalBackground) {
                $modalBackground.style.display = "none";
                $newNote.classList.remove('new-note--expanded');
                Array.prototype.forEach.call($notes, function(element){
                    element.classList.remove('note-container-expanded');
                    element.querySelector('[data-js=note-title]').removeAttribute('contentEditable','true');
                    element.querySelector('[data-js=note-body]').removeAttribute('contentEditable','true');
                });
            }
        }
    }

    const renderNote = function(data, id){
        let noteRender =  
            `<li class="note" data-js-id="${id}">
                <div class="note-container" data-js="note">
                    <button class="note-select"><svg class="icon"><use xlink:href="./svg/all.svg#done"/></svg></button>
                    <button class="note-pin-marked"><svg class="icon"><use xlink:href="./svg/all.svg#pin"/></svg></button>${mountNoteBody(data)}<ul class="note-features">
                        <li><button data-js="remember" class="tooltip" data-title="Remember" disabled><svg class="icon"><use xlink:href="./svg/all.svg#remember"/></svg><span class="tooltip">Remeber Me</span></button>
                        <li><button data-js="share" class="tooltip" data-title="Share" disabled><svg class="icon"><use xlink:href="./svg/all.svg#person_add"/></svg><span class="tooltip">Share</span></button></li>
                        <li><button data-js="addcolor" class="tooltip" data-title="Add Color" disabled><svg class="icon"><use xlink:href="./svg/all.svg#pallete"/></svg><span class="tooltip">Add Color</span></button></li>
                        <li><button data-js="addimage" class="tooltip" data-title="Add Image" disabled><svg class="icon"><use xlink:href="./svg/all.svg#image"/></svg><span class="tooltip">Add Image</span></button></li>
                        <li><button data-js="archieve" class="tooltip" data-title="Archieve" disabled><svg class="icon"><use xlink:href="./svg/all.svg#archieve"/></svg><span class="tooltip">Archieve</span></button></li>
                        <li><button data-js="more" class="tooltip" data-title="More..." disabled><svg class="icon"><use xlink:href="./svg/all.svg#more_vert"/></svg><span class="tooltip">More</span></button></li>  
                        <li><button data-js="finish" class="hidden">DONE</button></li>     
                    </ul>
                </div>
            </li>`;
        //utilities.log(noteRender);
        return noteRender;
    }

    const mountNoteBody = function(data){
        if(data.type === 'text')
            return `<div contentEditable="true" data-js="note-title" class="note-title" data-js-filter="apply-filter">${data.title}</div>
                    <div contentEditable="true" data-js="note-body" class="note-body" data-js-filter="apply-filter">${data.body}</div>`;
        if(data.type === 'list')
            return `<div contentEditable="true" data-js="note-title" class="note-title" data-js-filter="apply-filter">${data.title}</div>
                    <div contentEditable="true" data-js="note-body" class="note-body"><ul class="note-body-list">${mountNoteBodyOfList(data.body)}</ul></div>`;
    }
        
    function mountNoteBodyOfList(data){
        let list = '';
        data.forEach(element => list += `<li><svg class="icon hidden"><use xlink:href="./svg/all.svg#archieve"/></svg><input type="checkbox" name="${element}" value="${element}"><span data-js-filter="apply-filter">${element}<span></li>`);
        return list;
    }

    return {
        addEventNewNote: addEventNewNote,
        addEventNotes: addEventNotes,
        renderNote: renderNote
    }

})();