const input = document.getElementById("input");
const hello = document.getElementById("hello");

function test(){
    hello.innerHTML = input.value;
    console.log(hello);
}
test();