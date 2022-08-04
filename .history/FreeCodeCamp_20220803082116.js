const myStr = "Vu Van cuong learning JS";
const js = document.getElementById("js")

js.innerHTML = myStr;
const info = document.getElementById("info")

if(console.log(myStr.indexOf("JS")) != -1) {
    info.innerHTML = "tim thay chuoi Js trong chuoi " + myStr;
}else{
    info.innerHTML = "Khong tim thay chuoi JS";
}