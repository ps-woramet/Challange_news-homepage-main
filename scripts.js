const icon_hamburger = document.querySelector(".icon-hamburger");
const icon_close = document.querySelector(".icon-close");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

function toggle_menu(){
    icon_hamburger.classList.toggle("toggle");
    icon_close.classList.toggle("toggle");
    menu.classList.toggle("toggle");
    overlay.classList.toggle("show");
}

icon_hamburger.addEventListener("click", () => {
    toggle_menu();
});
icon_close.addEventListener("click", () => {
    toggle_menu();
});