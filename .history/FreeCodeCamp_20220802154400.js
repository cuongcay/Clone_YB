const input = document.getElementById("input");
const hello = document.getElementById("hello");

input.addEventListener("onchange", function (e) {
    console.log(e.target.value);
} );