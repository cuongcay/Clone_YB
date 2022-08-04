let myStr = "cuong JS JS JS";
const info = document.getElementById("info");

let test = /JS/;

let True = "True"

if(test.test(myStr) == True){
    info.innerHTML = "co JS"
}else{
    info.innerHTML = "No";
}

console.log(test.test(myStr));








