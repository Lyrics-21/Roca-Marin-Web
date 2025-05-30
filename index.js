/* Ocultar/Mostrar menu
const menu = document.getElementById("menu");
const linkMenu = document.getElementById("button-menu");
const desplegable = document.getElementById("menu-desplegable");

menu.addEventListener("click", () =>
{
    if(desplegable.style.display == "flex")
    {
        desplegable.style.display = "none";
        linkMenu.style.filter = "invert(0%)";
    }
    else
    {
        desplegable.style.display = "flex";
        desplegable.style.flexDirection = "column";
        desplegable.style.justifyContent = "center";
        linkMenu.style.filter = "invert(100%)";
        menuAbierto = true;
    }
});

document.addEventListener("click", (e) =>
{
    if(!menu.contains(e.target))
    {
        desplegable.style.display = "none";
        linkMenu.style.filter = "invert(0%)";
    }
})
*/

const categorias = document.querySelectorAll(".imagen_wrapper img");
let primer_expandir = document.getElementById("primer_expandir");
let segundo_expandir = document.getElementById("segundo_expandir");
let tercer_expandir = document.getElementById("container_expandir_derecha");
const cruzes = document.querySelectorAll(".cruz");

categorias.forEach(imagen => 
{
    imagen.addEventListener("click", () =>
    {
        switch (imagen.id)
        {
            case "primera_imagen":
                primer_expandir.style.display = "block";
                break;
            case "segunda_imagen":
                segundo_expandir.style.display = "block";
                break;
            case "tercera_imagen":
                tercer_expandir.style.display = "block";
                break;
        }
    }); 
});

cruzes.forEach(cruz =>
{
    cruz.addEventListener("click", () =>
    {
        primer_expandir.style.display = "none";
        segundo_expandir.style.display = "none";
        tercer_expandir.style.display = "none";
    });

});
