const input = document.getElementById("input");
const hello = document.getElementById("hello");

function test()2{
    hello.innerHTML = input.value;
    console.log(hello.innerHTML);
}
test();