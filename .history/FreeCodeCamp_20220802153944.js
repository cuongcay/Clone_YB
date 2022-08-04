const input = document.getElementById("input");
let hello = document.getElementById("hello");

input.addEventListener("onchange", function (e) {
    console.log(e.target.value);
};