const Utilities = (function(){

    const log = function(item){
        return console.log(item);
    }

    const isEmpty = function(data){
        return (data) ? true : (function(){throw new Error('Data is Empty')}());
    }

    const clearHTMLOfElement = function(element){
        element.innerHMTL = '';
    }

    return {
        log: log,
        isEmpty: isEmpty,
        clearHTMLOfElement: clearHTMLOfElement
    };

})();