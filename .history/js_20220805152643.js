const createIcon = document.getElementById("create-icon");
const createIconShow = document.getElementById("create-icon-show");

const notifiShow = document.getElementById("notifi-show");

const notifiIcon = document.getElementById("notifi-icon");

const user = document.getElementById("user");

const userShow = document.getElementById("user-show");

createIcon.onclick = () => {
    createIconShow.classList.toggle("show")
}

notifiIcon.onclick = () => {
    notifiShow.classList.toggle("show")
}
user.onclick = () => {
    userShow.classList.toggle("show")
}