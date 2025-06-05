//MENU DESPLEGABLE
const menu = document.getElementById("menu_desplegable");
const burgerCheckbox = document.getElementById("burger");

burgerCheckbox.addEventListener("change", () => 
{
    if (burgerCheckbox.checked) 
    {
        menu.classList.add("activo");
    } 
    else 
    {
        menu.classList.remove("activo");
    }
});