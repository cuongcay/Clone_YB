const input = document.getElementById("input");
const value = input.value;
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