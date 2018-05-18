const Modal = (function(){

    //Constants
    const $modalOthers = document.querySelector('[data-js="modal-others"]');
    const $modalOthersTitle = $modalOthers.querySelector('[data-js="modal-others-title"]');
    const $modalOthersBody = $modalOthers.querySelector('[data-js="modal-others-body"]');
    const $modalOthersButtons = $modalOthers.querySelector('[data-js="modal-others-buttons"]');
    const $modalOthersBackground = document.querySelector('[data-js="modal-others-background"]');

    function setElement(element, value){
        Utilities.clearHTMLOfElement(element);
        element.innerHTML = value;
    }

    function styleModal(style){
            $modalOthersBackground.style.display = style;
            $modalOthers.style.display = style;
    }

    function addEventModal(){
        $modalOthersBackground.addEventListener('click', turnOffModal);

    }
        
    function turnOnModal(title, body, bottons){
        setElement($modalOthersTitle, title);
        setElement($modalOthersBody, body);
        setElement($modalOthersButtons, bottons);
        styleModal('block');
        addEventModal();
    }

    function VerifyModalElements(){
        return ($modalOthersTitle.innerHTML !== '' || $modalOthersBody.innerHTML !== '' || $modalOthersButtons.innerHTML !== '');
    }

    function turnOffModal(){
        setElement($modalOthersTitle, '');
        setElement($modalOthersBody, '');
        setElement($modalOthersButtons, '');
        styleModal('none');
    }


    return {
        turnOnModal: turnOnModal,
        turnOffModal: turnOffModal
    }

})();