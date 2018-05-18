/*
    ## Sub Pub Module ## 
    v.1.0 - Not used yet.
    
*/

const events = (function() {

    var events = {};

    function on(eventName, fn) {
        events[eventName] = events[eventName] || [];
        events[eventName].push(fn);
    }

    function off(eventName, fn) {
        if (events[eventName]) {
            for (var i = 0; i < events[eventName].length; i++) {
                if( events[eventName][i] === fn ) {
                    events[eventName].splice(i, 1);
                    break;
                }
            }
        }
    }

    function emit(eventName, data) {
        if (events[eventName]) {
            events[eventName].forEach(function(fn) {
                fn(data);
            });
        }
    }

    return {
        on: on,
        off: off,
        emit: emit
    };

})();

//events - a super-basic Javascript (publish subscribe) pattern
/*
class Event{
    
    constructor(){
        this.events = {};
    }

    on(eventName, fn) {

        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    }

    off(eventName, fn) {

        if (this.events[eventName]) {
            for (var i = 0; i < this.events[eventName].length; i++) {
                if (this.events[eventName][i] === fn) {
                    this.events[eventName].splice(i, 1);
                    break;
                }
            };
        }
    }

    trigger(eventName, data) {

        if (this.events[eventName]) {
            this.events[eventName].forEach(function(fn) {
                fn(data);
            });
        }
    }

}*/