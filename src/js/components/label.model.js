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