/*
    ## Navigation Component Controller ##
    v.1.0
        - Handle with Navigation States;
    
*/

const Navigation =  (function(){
    
        const $mainNav = document.querySelector("[data-js=main-navigation]");
        const $mainNotes = document.querySelector("[data-js=main-notes]");

        function initNavigation($button) {
            $button.addEventListener('click', toggleShowNavigation);
        }

        function toggleShowNavigation(){

            //Verify windowSize
            if(window.innerWidth > 1000) {
                toogleLargeSize();
            } else {
                toogleSmallSize();
            }
        }

        function toogleLargeSize(){
            if( $mainNav.classList.contains('hidden') ) {
                $mainNav.classList.remove('hidden');
                $mainNotes.classList.remove('expand');
            } else {
                $mainNav.classList.add('hidden');
                $mainNotes.classList.add('expand');
            }
        }

        function toogleSmallSize(){

            if( $mainNav.classList.contains('hidden') ) {
                $mainNav.classList.remove('hidden');
                console.log('hidden');
                
            } else {
                console.log('expand');
                $mainNav.classList.add('hidden');
                window.addEventListener('click', addEventWindow, true);
            }
        }

        function addEventWindow(){
            let e = window.event || event;
            if(!$mainNav.contains(e.target)) {
                $mainNav.classList.remove('hidden');
                window.removeEventListener('click', addEventWindow, true);
                e.stopPropagation();
            }
        }

        return {
            initNavigation:initNavigation
        }

    })();