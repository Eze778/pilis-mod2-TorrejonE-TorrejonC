let city = document.getElementById("ciudad");
let weatherIcon = document.getElementById("icono")
let temp = document.getElementById("temp");
let descripcion = document.getElementById("descTiempo");
let sensacionTerm = document.getElementById("sensTerm")
let tempMinima = document.getElementById("minTemp");
let tempMaxima = document.getElementById("maxTemp");
let humedad = document.getElementById("humedad");

//Permite capturar los datos enviados por el formulario
function onClick(event) {
  event.preventDefault();
  this.style.backgroundColor = "black";
  console.log("click...");
  console.log(event);

  const mensaje = {
    comercio: document.getElementById('comercio').value,
    titular: document.getElementById('titular').value,
    celular: document.getElementById('celular').value
  }
  console.log(mensaje);


  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(mensaje),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      Swal.fire(
        'Solicitud Recibida',
        'Gracias por Registrarte',
        'success'
      );
      cleanForm();
      /* redirectUrl(); */
    })
    .catch((err) => console.log(err));

}

function cleanForm() {
  let formulario = document.getElementById('formulario');
  formulario.reset();
}

//Muestra los datos traidos de la api en el html 
const mostrarDato = (obj) => {
  city.textContent = obj.name;
  const icon = obj.weather[0].icon;
  weatherIcon.innerHTML = `<img src='assetsKelo/icons/${icon}.png'></img>`;
  temp.textContent = Math.floor(obj.main.temp) + "°C";
  descripcion.textContent = obj.weather[0].description.charAt(0).toUpperCase() + obj.weather[0].description.slice(1);
  sensacionTerm.textContent = Math.floor(obj.main.feels_like) + "°C";
  tempMinima.textContent = Math.floor(obj.main.temp_min) + "°C";
  tempMaxima.textContent = Math.floor(obj.main.temp_max) + "°C";
  humedad.textContent = obj.main.humidity + "%";
}

function redirectUrl() {
  window.location.href = "https://google.com";
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);

//Permite obtener los datos del clima
async function getWeather(){
    
  try{
      let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-24.183339&lon=-65.331298&appid=5142685369741d0cdc16908f43b2836f&units=metric&lang=es");
      let weatherResponse = await response.json();
      console.log(weatherResponse);

      mostrarDato(weatherResponse);
  } catch {
      console.log("Ocurrio un error");
  }
}
getWeather();