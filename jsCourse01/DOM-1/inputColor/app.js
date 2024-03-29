const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Actualizo el texto de los parrafos, que de normal estan vacios
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function refreshColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul}`;
  document.body.style.backgroundColor = colorRGB;
}

// Actualizar red.
inputRojo.addEventListener("change", (e) => {
  rojo = e.target.value;
  textoRojo.innerText = rojo;
  refreshColor(rojo, verde, azul);
});
// Actualizar verde.
inputVerde.addEventListener("change", (e) => {
  verde = e.target.value;
  textoVerde.innerText = verde;
  refreshColor(rojo, verde, azul);
});
// Actualizar azul.
inputAzul.addEventListener("change", (e) => {
  azul = e.target.value;
  textoAzul.innerText = azul;
  refreshColor(rojo, verde, azul);
});
