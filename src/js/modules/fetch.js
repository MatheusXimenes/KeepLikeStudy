const Fetch = (function(){
    
    let Listlabels;
    let notesPin;
    let notesOthers;
    const endpoint = './json/data.json';
    
    //document.addEventListener('DOMContentLoaded', fetchData);

    function fetchData(){
        
        window.fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            
            //console.log(data.user);
            
            // TODO:
            // If Data on Server isNewer then.
            // Insert Data from the server to LocalStorage
            // Then RenderAll() from localStorage;
        })
        .catch(error => console.error('Error:', error));
    
    }

    fetchData();

    return {

    }



})();
        