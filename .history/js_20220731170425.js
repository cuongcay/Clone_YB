const searchinput = document.getElementById("search_input");
const icon_search = document.getElementById("icon-search-none");

search_input.addEventListener("focus", () => {
    icon_search.style.display = "block";
});