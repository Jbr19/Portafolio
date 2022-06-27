// Validar formulario
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('name').value;
    if(nombre.length > 50 ) {
      alert('Campo Nombre no debe estar en blanco o vacío');
      return;
    }
    
    var asunto = document.getElementById('asunto').value;
    if (asunto.length > 50) {
      alert('Campo Asunto no debe estar en blanco o vacío');
      return;
    }

    var txt = document.getElementById('mensage').value;
    if (txt.length > 300) {
      alert('Campo Asunto no debe estar en blanco o vacío');
      return;
    }
    this.submit();
  }


