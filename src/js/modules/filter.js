/*

    ## Filter Module ## - Filter Notes Using Header Input to Search 
    v.1.0
        - Filters all notes with a bunch for loops;
    v.1.1
        TODO EVOLUTION (Change indexOf to use regExp and using array.map() API);
*/

const Filter = (function(){

    'use strict';

    let inFilter;
    let outFilter;

    function initFilter($inFilter, $outFilter){
        inFilter = $inFilter; //Verificar o Uso do This
        outFilter = $outFilter; //Verificar o Uso do This
        inFilter.addEventListener('keyup', filterAllNotes );
    }

    //Função que filtra a table ao inserir o valor no input
    function filterAllNotes() {
        const value = inFilter.value.toUpperCase();
        
        //List of All Notes
        for(let n = 0; n < outFilter.length; n++){

            //Single Note
            let outFilterChildren = outFilter[n].children;
            for(let l = 0; l < outFilterChildren.length; l++) {
                
                let find = false;
                let $apply = outFilterChildren[l].querySelectorAll('[data-js-filter="apply-filter"]');

                //Search into Fields
                for (let a = 0; a < $apply.length; a++) {

                    if ($apply[a].innerText.toUpperCase().indexOf(value) > -1){
                        find = true;
                        console.log('find');
                    }
                }
                
                //Show and hide notes
                find ? outFilterChildren[l].classList.remove('note-hidden') : outFilterChildren[l].classList.add('note-hidden');
            }    
        }

    }

    return {
        initFilter: initFilter
    }

})();