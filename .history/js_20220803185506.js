const searchInput = document.getElementById("search");

const searchModal = document.getElementById("search-modal");

function handleClick(){
        searchModal.style.display = "block";
        searchInput.blur();
}

