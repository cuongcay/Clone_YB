const createIcon = document.getElementById("create-icon");
const createIconShow = document.getElementById("create-icon-show");

const notifiShow = document.getElementById("notifi-show");

const notifiIcon = document.getElementById("notifi-icon");

createIcon.onclick = () => {
    createIconShow.classList.toggle("show")
}

notifiIcon.onclick = () => {
    notifiShow.classList.toggle("show")
}
if(typeof(notifiShow) === "show"){
    notifiIcon.style.hover = 
}