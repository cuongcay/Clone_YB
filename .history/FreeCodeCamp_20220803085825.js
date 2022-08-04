let myStr = "cuong JS JS JS ";
const info = document.getElementById("info");

let test = /JS/;


if(test.test(myStr) === true){
    info.innerHTML = "co JS"
}else{
    info.innerHTML = "No";
}

console.log(test.test(myStr));








