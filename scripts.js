const icon_hamburger = document.querySelector(".icon-hamburger");
const icon_close = document.querySelector(".icon-close");
const menu = document.querySelector(".menu");
icon_hamburger.addEventListener("click", () => {
    icon_hamburger.classList.toggle("toggle");
    icon_close.classList.toggle("toggle");
    menu.classList.toggle("toggle");
});
icon_close.addEventListener("click", () => {
    icon_hamburger.classList.toggle("toggle");
    icon_close.classList.toggle("toggle");
    menu.classList.toggle("toggle");
});