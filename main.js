function onClick (event) {
    event.preventDefault();
    this.style.backgroundColor = "negro";
    consola.log("haga clic en...");
    consola.log(event);
  
  
    const mensaje = {
      name: documento.getElementById("name").valor,
      titular: documento.getElementById("titular").valor,
      celualr: documento.getElementById("celular").valor
    }
    console.log(mensaje);
  
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "Content-type": "apliction/json; charset=UTF-8"},
    })
      .then((response) => response.json())
      .then((json) => {
          consola.log(json);
          Swal.fire(
              'Enviado',
              'Gracias por tu comentario',
              'éxito'
          );
          cleanForm();
          /* Redireccionar URL(); */
      })
      .catch((error) => consola.log(error));
  
  }

  function cleanForm() {
    let formulario = document.getElementById('formulario');    
    formulario.reset();    
}
function redirectURL () {
    ventana.ubicación.href = "https://google.com";    
}

let boton = document.getElementById("enviar");
boton.addEventListener("clic", onClick);