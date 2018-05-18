/*
    ## Header Component ##
    v.1.0
        - Handle with header shadow on Scroll the page;
        
*/

const Header =  (function(){

        /// Event on Scroll - Header Shadow
        function initHeader($element){
            window.addEventListener('scroll', toggleAddShadow);
            function toggleAddShadow() {
                document.documentElement.scrollTop > 20 ? $element.classList.add('default-shadow') : $element.classList.remove('default-shadow');
            }
        }

        return {
            initHeader: initHeader
        }
        
    
    })();