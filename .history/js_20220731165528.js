const search_input = document.getElementById("search_input");
const icon_search = document.getElementById("icon-search-none");

search_input.addEventListener("click", () => {
    icon_search.style.display = "block";
    icon_search.focus();
})