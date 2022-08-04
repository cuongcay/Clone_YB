const searchInput = document.getElementById("search_input");

const searchModal = document.getElementById("search-modal");

function handleClick(){
    if(searchInput.focus){
        searchModal.style.display = "block";
    }
}

