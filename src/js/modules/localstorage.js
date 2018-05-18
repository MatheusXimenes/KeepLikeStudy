const LocalStorage = (function(){

    function setData(name, data){
        //Set a Array to a JSON 
        data ? localStorage.setItem(name, JSON.stringify(data)) : console.log('Trying to insert a new item without data!');
    }

    function removeData(name, data){
        localStorage.removeItem(name);
    }

    function getData(name){
        return JSON.parse(localStorage.getItem(name)) || []; //Get Convertiong to Array;
    }


    function storageData(userData, ListNotesPin, ListNotesOthers, ListNotesArchieved, listLabels) {
        
        setData('app-notes-user', userData);
        setData('app-notes-list-pin', ListNotesPin);
        setData('app-notes-list-other', ListNotesOthers);
        setData('app-notes-list-archieved', ListNotesArchieved);
        setData('app-notes-list-labels', listLabels);
    }

    return {
        setData: setData,
        getData: getData,
        removeData: removeData,
        storageData: storageData
    }

})();

