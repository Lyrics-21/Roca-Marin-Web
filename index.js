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

//CARRUSEL
const images = document.querySelectorAll('.imagenes_carrusel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let current = 0;
let interval = setInterval(nextImage, 4000);

function showImage(index)
{
  images.forEach((img, i) =>
    {
        img.classList.toggle('active', i === index);
    });
}

function nextImage()
{
    current = (current + 1) % images.length;
    showImage(current);
}

function prevImage() 
{
    current = (current - 1 + images.length) % images.length;
    showImage(current);
}

function resetInterval() 
{
    clearInterval(interval);
    interval = setInterval(nextImage, 4000);
}

nextBtn.addEventListener("click", () => 
{
    nextImage();
    resetInterval();
});

prevBtn.addEventListener("click", () => 
{
    prevImage();
    resetInterval();
});


//CATEGORIAS
const categorias = document.querySelectorAll(".imagen_wrapper img");

const primer_expandir = document.getElementById("primer_expandir");
const segundo_expandir = document.getElementById("segundo_expandir");
const tercer_expandir = document.getElementById("container_expandir_derecha");
const conjunto_expandir = [primer_expandir, segundo_expandir, tercer_expandir];
const primera_lamina = document.getElementById("primera_lamina");
const segunda_lamina = document.getElementById("segunda_lamina");
const tercera_lamina = document.getElementById("tercera_lamina");
const conjunto_laminas = [primera_lamina, segunda_lamina, tercera_lamina];


const container_primera_imagen = document.getElementById("container_primera_imagen");
const container_segunda_imagen = document.getElementById("container_segunda_imagen");
const container_tercera_imagen = document.getElementById("container_tercera_imagen");
const containers = [container_primera_imagen, container_segunda_imagen, container_tercera_imagen];

const cruzes = document.querySelectorAll(".cruz");

categorias.forEach(imagen => 
{
    imagen.addEventListener("click", () =>
    {
        switch (imagen.id)
        {
            case "primera_imagen":
                resaltarDiv(primer_expandir);
                cambiarZindex(container_primera_imagen);
                ocultarLamina(primera_lamina)
                break;
            case "segunda_imagen":
                resaltarDiv(segundo_expandir);
                cambiarZindex(container_segunda_imagen);
                ocultarLamina(segunda_lamina)
                break;
                case "tercera_imagen":    
                resaltarDiv(tercer_expandir);
                cambiarZindex(container_tercera_imagen);
                ocultarLamina(tercera_lamina)
                break;
        }
    }); 
});

cruzes.forEach(cruz =>
{
    cruz.addEventListener("click", () =>
    {
        resaltarDiv(null);
        cambiarZindex(null);
        ocultarLamina(null)  
    });

});

//FUNCIONES

function ocultarLamina(lamina_ocultar)
{
    conjunto_laminas.forEach(lamina => 
    {
        if (lamina === lamina_ocultar)
        {
            lamina.style.display = "none";
        }
        else
        {
            lamina.style.display = "flex";
        }
    });
};

function resaltarDiv(div)
{
    conjunto_expandir.forEach(container =>
    {
        if(container === div)
        {
            container.style.display = "block";
        }
        else
        {
            container.style.display = "none";
        }
    });
}

function cambiarZindex(imagen) 
{
    containers.forEach(container => 
    {
        if (container === imagen) 
        {
            container.style.zIndex = 25;
        }
        else
        {
            container.style.zIndex = 10;
        }
    });
};
