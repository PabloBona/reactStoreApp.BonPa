export const ShowFilterPrice = () => {
    const iconMenu = document.querySelector(".bx-Filter");
const menu = document.querySelector( ".category");
const menus = document.querySelector( ".price");
 

iconMenu.addEventListener("click", function () {
    console.log(menu.classList.toggle("menu-show"));
});
iconMenu.addEventListener("click", function () {
    console.log(menus.classList.toggle("menus-show"));
});

}