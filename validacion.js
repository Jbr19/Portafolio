// Validar formulario



document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("form").addEventListener('submit', validarFormulario); 
});


function validarFormulario(evento) {
  evento.preventDefault();
  var usuario = document.getElementById('nombre').value;
  if(usuario.length > 25) {
    Swal.fire({
      title: "Error al digital el nombre",
      text: 'Puede contener un máximo de 25 caracteres',
      icon: 'error',
      confirmButtonText: "Continuar"
    });
    return;
  }

  var clave = document.getElementById('asunto').value;
  if (clave.length > 50) {
    Swal.fire({
      title: "Error al escribir el asunto",
      text: "Puede contener un máximo de 50 caracteres",
      icon: "error",
      confirmButtonText: "Continuar"
    });
    return;
  }

  var clave = document.getElementById('mensage').value;
  if (clave.length > 300) {
    Swal.fire({
      title: "Error en el mensaje",
      text: "Puede contener un máximo de 300 caracteres",
      icon: "error",
      confirmButtonText: "Continuar"
    });
    return;
  }

  this.submit();
}
