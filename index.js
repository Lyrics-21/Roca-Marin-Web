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
const categorias = document.querySelectorAll(".container_imagenes");

const primer_expandir = document.getElementById("primer_expandir");
const segundo_expandir = document.getElementById("segundo_expandir");
const tercer_expandir = document.getElementById("container_expandir_derecha");
const conjunto_expandir = [primer_expandir, segundo_expandir, tercer_expandir];

const container_primera_imagen = document.getElementById("container_primera_imagen");
const container_segunda_imagen = document.getElementById("container_segunda_imagen");
const container_tercera_imagen = document.getElementById("container_tercera_imagen");
const containers = [container_primera_imagen, container_segunda_imagen, container_tercera_imagen];

const primera_lamina = document.getElementById("primera_lamina");
const segunda_lamina = document.getElementById("segunda_lamina");
const tercera_lamina = document.getElementById("tercera_lamina");
const conjunto_laminas = [primera_lamina, segunda_lamina, tercera_lamina];

const cruzes = document.querySelectorAll(".cruz");

categorias.forEach(categoria =>
{
    if (window.innerWidth > 500)
    {
        categoria.addEventListener("click", () =>
        {
            switch (categoria.id)
            {
                case "container_primera_imagen":
                    resaltarDiv(primer_expandir);
                    ocultarLamina(primera_lamina);
                    cambiarZindex(container_primera_imagen);
                    break;
    
                case "container_segunda_imagen":
                    resaltarDiv(segundo_expandir);
                    cambiarZindex(container_segunda_imagen);
                    ocultarLamina(segunda_lamina);
                    break;
    
                case "container_tercera_imagen":
                    resaltarDiv(tercer_expandir);
                    cambiarZindex(container_tercera_imagen);
                    ocultarLamina(tercera_lamina);
                    break;
            }
        });
    }
});

//FUNCIONES

function resaltarDiv(div)
{
    conjunto_expandir.forEach(container =>
    {
        if(container === div)
        {
            container.style.display = "flex";
            container.style.cursor = "default";
        }
        else
        {
            container.style.display = "none";
            container.style.cursor = "pointer";
        }
    });
};

cruzes.forEach(cruz =>
{
    cruz.addEventListener("click", () =>
    {
        resaltarDiv(null);
        ocultarLamina(null);
    });

});

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

function cambiarZindex(imagen) 
{
    containers.forEach(container => 
    {
        if (container == imagen) 
        {
            container.style.zIndex = 20;
        }
        else
        {
            container.style.zIndex = 5;
        }
    });
};


//CLIENTES
const carousel = document.getElementById("carousel");
const prev = document.getElementById("prev_c");
const next = document.getElementById("next_c");

let position = 0;
const scrollPerClick = 230;
const maxScroll = carousel.scrollWidth - carousel.parentElement.offsetWidth;

next.addEventListener("click", () =>
{
    position -= scrollPerClick;
    const maxTranslate = -(carousel.scrollWidth - carousel.parentElement.offsetWidth);
    if (position < maxTranslate) position = maxTranslate;
    carousel.style.transform = `translateX(${position}px)`;
});

prev.addEventListener("click", () =>
{
    position += scrollPerClick;
    if (position > 0) position = 0;
    carousel.style.transform = `translateX(${position}px)`;
});