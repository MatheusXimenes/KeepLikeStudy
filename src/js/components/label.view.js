/*
    ## Label Component View ##
    v.1.0
        - Handle with Labels render;
    v.1.1
        TODO (Try better use of MVC Segregation);
*/

const LabelView = (function(){

    ///Render Labels in Navigation Bar
    const $labelsList = document.querySelector('[data-js="labels-list-navigation"]');
    const $labelModalTitle = 'Edit Labels';
    const $labelModalButton = '<button data-js="close-modal">DONE</button>';
    const $addLabelNav = `<li><button data-js="show-modal-label"><svg class="icon"><use xlink:href="./svg/all.svg#add"/></svg>New Label</button></li>`;
    const $addLabelModal = `<li class="new-label"><button data-js="cancel-this-label"><svg class="icon"><use xlink:href="./svg/all.svg#add"/></svg></button><input data-js="modal-label-new-label" type="text" placeholder="Create New Label..."/><button data-js="add-new-label"><svg class="icon"><use xlink:href="./svg/all.svg#done"/></svg></button></li>`;

    ///Renders Label List and add events to Modal
    const renderLabelListNavigation = function(){
        $labelsList.innerHTML = '';
        const dataListLabels = LabelModel.getLabelDataFromLocalStorage();
        dataListLabels.forEach(element =>  $labelsList.innerHTML += renderLabelButtonNavigation(element));
        $labelsList.innerHTML += $addLabelNav;
        addEventToLabels();
        addEventToLabelsModal();
    }

    function renderLabelButtonNavigation(element){
        return `<li><button data-js="navigation-label" data-js-filter=${element}><svg class="icon"><use xlink:href="./svg/all.svg#label"/></svg>${element}</button></li>`
    }

    function addEventToLabelsModal(){
        const $showLabel = document.querySelectorAll('[data-js="show-modal-label"]');
        $showLabel.forEach( element => element.addEventListener('click', renderLabelsModal));
    }

    function addEventToLabels(){
        ///TODO:
        // On Click
        // Change Name of App 
        // Render List of Label Itens;
        // const $btnLabel = $labelsList.querySelectorAll('[data-js="navigation-label"]');
    }

    /// Render Label on Modal
    function renderLabelButtonModal(element){
        return `<li data-js="navigation-label" data-js-filter=${element}><button data-js="remove-modal-label" class="remove-modal-label"></button><input data-js="modal-label-new-label" type="text" class="editable" value="${element}"/><button data-js="edit-modal-label"><svg class="icon"><use xlink:href="./svg/all.svg#create"/></svg></button></li>`
        //return `<li data-js="navigation-label" data-js-filter=${element}><button data-js="remove-modal-label" class="remove-modal-label" ><svg class="icon"><use xlink:href="./svg/all.svg#label"/></svg></button><input data-js="modal-label-new-label" type="text" class="editable" value="${element}"/><button data-js="edit-modal-label"><svg class="icon"><use xlink:href="./svg/all.svg#create"/></svg></button></li>`
    }

    function renderBodyLabelModal(){
        const dataListLabels = LabelModel.getLabelDataFromLocalStorage();
        const ArrayBodyModal = dataListLabels.map(element => renderLabelButtonModal(element)); //renderLabelButtonModal(element));
        ArrayBodyModal.unshift($addLabelModal);
        ArrayBodyModal.unshift('<ul>');
        ArrayBodyModal.push('</ul>');
        return ArrayBodyModal.join('');
    }

    function renderLabelsModal(){
        Modal.turnOnModal($labelModalTitle, renderBodyLabelModal(), $labelModalButton);
        
        addEventModal();
        addEventAddLabelModal();
        addEventRemoveLabelModal();
        addEventEditLabelModal();
    }

    function addEventModal(){
        $btnCloseModal = document.querySelector('[data-js="close-modal"]');
        $btnCloseModal.addEventListener('click', Modal.turnOffModal);
    }

    function addEventAddLabelModal(){
        const $addLabel = document.querySelector('[data-js="add-new-label"]');
        $addLabel.addEventListener('click', handlerAddModalLabel);
    }
    
    function addEventRemoveLabelModal(){
        const $removeLabel = document.querySelectorAll('[data-js="remove-modal-label"]');
        //$removeLabel.forEach(element => element.addEventListener('mouseover', overRemoveModalLabel, true));
        //$removeLabel.forEach(element => element.addEventListener('mouseout', outRemoveModalLabel, true));
        $removeLabel.forEach(element => element.addEventListener('click', handlerRemoveModalLabel, true));
    }

    function overRemoveModalLabel(){
        console.log(this);
        this.children[0].children[0].setAttribute('xlink:href', './svg/all.svg#delete');
    }

    function outRemoveModalLabel(){
        console.log(this);
        this.children[0].children[0].setAttribute('xlink:href', './svg/all.svg#label');
    }


    function addEventEditLabelModal(){
        const $editLabel = document.querySelectorAll('[data-js="edit-modal-label"]');
        $editLabel.forEach(element => element.addEventListener('click', handlerEditModalLabel));
    }

    function handlerEditModalLabel(){
        const editLabelValue = this.parentNode.children[1].value;
        const editFilterValue = this.parentNode.getAttribute('data-js-filter');
        LabelController.editLabel(editFilterValue, editLabelValue);
        renderLabelsModal();
    }

    function handlerAddModalLabel(){
        const $addLabel = document.querySelector('[data-js="modal-label-new-label"]');
        const labelValue = $addLabel.value;
        LabelController.addLabel(labelValue);
        renderLabelsModal();
    }

    function handlerRemoveModalLabel(){
        console.log(this);
        const labelValue = this.parentNode.getAttribute('data-js-filter');
        LabelController.removeLabel(labelValue);
        renderLabelsModal();
    }


    return {
        renderLabelListNavigation:renderLabelListNavigation,
    }

})();