const formulario = document.forms["formulario-donacion"];

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Enviando datos");
});

/*
	📌 Evento Change
	Nos permite detectar cuando hay un cambio en el valor de un input, select o textarea.
	Se ejecuta cuando cambiamos el valor del input y damos click fuera.
*/

formulario.pais.addEventListener("change", (e) => {
  console.log("El pais cambió");
  console.log("El nuevo valor es: " + e.target.value);
});

formulario["cantidad-5"].addEventListener("change", () => {
  console.log("La cantidad cambió");
});
formulario["cantidad-10"].addEventListener("change", () => {
  console.log("La cantidad cambió");
});

/*
	📌 Evento Focus
	Nos permite detectar cuando un input recibe el foco de atención.
*/

formulario.correo.addEventListener("focus", () => {
  console.log("El input en foco");
});
/*
	📌 Evento Blur
	Nos permite detectar cuando un input pierde el foco de atención.
*/
formulario.correo.addEventListener("blur", () => {
  console.log("El input no es el foco");
});

/*
	📌 Evento keydown
	Nos permite detectar cuando una tecla es presionada sobre un input.
*/
formulario.correo.addEventListener("keydown", (e) => {
  console.log(e);
});

/*
	📌 Evento keyup
	Se ejecuta cuando un una tecla es levantada al escribir sobre un input.
*/
formulario.correo.addEventListener("keyup", (e) => {
  console.log(e);
});
