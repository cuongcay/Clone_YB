const input = document.getElementById("input");

const number = prompt("Nhaapj vaof 1 so");
const mod = number%2;
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