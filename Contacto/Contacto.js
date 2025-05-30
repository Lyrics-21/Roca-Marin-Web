const btn = document.getElementById('boton_estilo');

document.getElementById('form')
 .addEventListener('submit', function(event)
 {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_5d76rhq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => 
      {
        btn.value = 'Send Email';
        Swal.fire(
        {
          title: "Email enviado con exito!",
          icon: "success",
          draggable: true
        });
    }, (err) => 
    {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
