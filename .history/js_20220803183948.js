const searchInput = document.getElementById("search_input");
const iconSearch = document.getElementById("icon-search-none");
const searchModal = document.getElementById("search_modal");


function handleFocus(){
    iconSearch.style.display = 'block';
    iconSearch.focus();
    searchModal.style.display = 'block';
}


