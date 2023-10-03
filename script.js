const languageChangeLink = document.querySelector(".header__language a");
const burgerMenuLink = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__body");

languageChangeLink.addEventListener("click", (event) => {
    event.preventDefault();
    if (menuBody.style.left === "0") {
        menuBody.style.left = "-200%";
    }
});

burgerMenuLink.addEventListener("click", (event) => {
    event.preventDefault();

    if (menuBody.style.left === "0") {
        menuBody.style.left = "-200%";
    } else {
        menuBody.style.left = "0";
    }
});

menuBody.addEventListener("click", (event) => {
    menuBody.style.left = "-200%";
});

menuBody.addEventListener("click", (event) => {
    event.stopPropagation();
});
