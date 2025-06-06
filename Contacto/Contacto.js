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

//ENVIAR MAIL
const btn = document.getElementById('boton_estilo');

document.getElementById('form')
 .addEventListener('submit', function(event)
 {
   event.preventDefault();

   // Obtener los valores de los inputs
   const nombre = document.getElementById('name_input').value.trim();
   const telefono = document.getElementById('telefono_input').value.trim();
   const email = document.getElementById('email_input').value.trim();
   const mensaje = document.getElementById('mensaje_input').value.trim();

   // Validaciones
   if (nombre.length < 3)
    {
      Swal.fire(
      {
        icon: 'warning',
        title: 'Nombre inválido',
        text: 'El nombre debe tener al menos 3 caracteres.'
      });
      return;
    }

   if (telefono.length < 9) 
    {
      Swal.fire(
      {
        icon: 'warning',
        title: 'Teléfono inválido',
        text: 'El teléfono debe tener al menos 9 dígitos.'
      });
      return;
    }

   if (!email.includes('@') || !email.includes('.com'))
    {
     Swal.fire(
      {
        icon: 'warning',
        title: 'Email inválido',
        text: 'El email debe contener "@" y ".com".'
      });
     return;
    }

   if (mensaje.length < 10) 
    {
     Swal.fire(
      {
        icon: 'warning',
        title: 'Mensaje muy corto',
        text: 'El mensaje debe tener al menos 10 caracteres.'
      });
     return;
    }
    
   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_5d76rhq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      Swal.fire({
        title: "Email enviado con éxito!",
        icon: "success"
      });
    }, (err) => {
      btn.value = 'Send Email';
      Swal.fire({
        icon: 'error',
        title: 'Error al enviar',
        text: JSON.stringify(err)
      });
    });
});
