const User = (function(){

    function initUser($element, Data){
        renderUser($element, Data);
    }
    
    function renderUser(element, Data){
        return Data;
    }

    return {
        initUser: initUser
    }
    
})();