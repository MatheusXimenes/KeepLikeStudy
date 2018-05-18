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