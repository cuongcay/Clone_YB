const search_input = document.getElementById("search_input");
const icon_search = document.getElementById("icon-search-none");

search_input.addEventListener("click", () => {
    icon_search.style.display = "none";
    icon_search.focus();
})