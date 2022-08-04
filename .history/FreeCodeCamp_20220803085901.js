let myStr = "cuong JS JS JS JavaScript JavaScript";
const info = document.getElementById("info");

let test = /Javascript/;


if(test.test(myStr) === true){
    info.innerHTML = "co JS"
}else{
    info.innerHTML = "No";
}

console.log(test.test(myStr));








