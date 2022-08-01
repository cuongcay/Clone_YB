const searchInput = document.getElementById("search_input");
const iconSearch = document.getElementById("icon-search-none");

searchInput.addEventListener("focus", () => {
    iconSearch.style.display = "block";
});