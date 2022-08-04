const myStr = "Vu Van cuong learning JS";
const info = document.getElementById("info")

if(console.log(myStr.indexOf("JS")) != -1) {
    info.innerHTML = "tim thay chuoi Js";
}else{
    info.innerHTML = "Khong tim thay chuoi JS";
}