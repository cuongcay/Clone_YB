const input = document.getElementById("input");
function inputhandel(e)
const mod = value%2;
switch (mod) {
    case 0 : {
        document.getElementById("number").innerHTML = "la So Chan";
        break;
    }
    case 1 :{
        document.getElementById("number").innerHTML = "la So le";
        break;
    }
}