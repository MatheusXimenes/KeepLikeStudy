/*
    ## Label Component Model ##
    v.1.0
        - Handle with Labels Data;
    v.1.1
        TODO (Try better use of MVC Segregation);
*/

const LabelModel = (function(){
    function getLabelDataFromLocalStorage(){
        return LocalStorage.getData('app-notes-list-labels');
    }

    function setLabelDataFromLocalStorage(data){
        return LocalStorage.setData('app-notes-list-labels', data);
    }

    return {
        setLabelDataFromLocalStorage: setLabelDataFromLocalStorage,
        getLabelDataFromLocalStorage: getLabelDataFromLocalStorage
    }
})();