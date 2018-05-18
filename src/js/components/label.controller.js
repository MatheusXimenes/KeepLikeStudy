/*
    ## Label Component Controller ##
    v.1.0
        - Handle with Add Labels to App;
        - Handle with Edit Labels to App;
        - Handle with Remove Labels to App;

    v.1.1
        TODO (Try better use of MVC Segregation);
*/

const LabelController = (function(){

    function addLabel(data){
        Utilities.isEmpty(data);
        let dataListLabels = LabelModel.getLabelDataFromLocalStorage();
        if(dataListLabels.includes(data))
            return alert('Label already exists! Choose another one!');
        
        dataListLabels.push(data); // Insert into Array
        dataListLabels.sort(); // Order Array by Name
        LabelModel.setLabelDataFromLocalStorage(dataListLabels);
        LabelView.renderLabelListNavigation();
    }

    //TODO: Archieve the current_data on the element.
    function editLabel(oldData, newData){
        let dataListLabels = LabelModel.getLabelDataFromLocalStorage();
        const oldDataPosition = dataListLabels.indexOf(oldData, 0);    //find Position
        //Utilities.log(oldDataPosition);
        dataListLabels.splice(oldDataPosition, 1, newData); //Remove 1 by 1
        dataListLabels.sort();
        LabelModel.setLabelDataFromLocalStorage(dataListLabels);
        LabelView.renderLabelListNavigation();
    }

    function removeLabel(data){
        let dataListLabels = LabelModel.getLabelDataFromLocalStorage();
        const oldDataPosition = dataListLabels.indexOf(data, 0);
        dataListLabels.splice(oldDataPosition,1); //Remove a Item
        dataListLabels.sort(); //Order
        LabelModel.setLabelDataFromLocalStorage(dataListLabels);
        LabelView.renderLabelListNavigation();
    }

    return {
        addLabel: addLabel,
        editLabel: editLabel,
        removeLabel: removeLabel,
    };

})();