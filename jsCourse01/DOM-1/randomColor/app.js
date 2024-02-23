const boton = document.querySelector("button");
const color = document.getElementById("color");

function getColor() {
  let digitos = "0123456789ABCDEF";
  let colorHex = "#";

  for (let i = 0; i < 6; i++) {
    let indexRandom = Math.floor(Math.random() * 16);
    colorHex += digitos[indexRandom];
  }

  return colorHex;
}

boton.addEventListener("click", function () {
  let colorRandom = getColor();
  // Actualizar el texto
  color.textContent = colorRandom;
  // Actualiza el color del fondo
  document.body.style.backgroundColor = colorRandom;
});
