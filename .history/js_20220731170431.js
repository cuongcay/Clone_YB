const searchInput = document.getElementById("search_input");
const icon_search = document.getElementById("icon-search-none");

searchInput.addEventListener("focus", () => {
    icon_search.style.display = "block";
});