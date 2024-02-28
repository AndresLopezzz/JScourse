/*
	📌 Formularios

	Tenemos dos formas de acceder a los formularios.
	- Mediante el objeto forms
	- Mediante métodos del DOM
*/
// const correo = document.querySelector("#formulario-donacion [name=correo]");
// console.log(correo);

document.getElementById("btnEnviar").addEventListener("click", (e) => {
  e.preventDefault();

  const correo = document.querySelector("#formulario-donacion [name=correo]");
  console.log(correo.value);

  console.log(document.forms["formulario-donacion"]["pais"].value);

  const formulario = document.forms["formulario-donacion"];

  console.log(formulario["donacion"].value);
  //Si el nombre no tiene "-" para separar palabras puedo usar simplemente con el punto.
  console.log(formulario.fecha.value);

  if (formulario["terminos-y-condiciones"] == "on") {
    console.log("Terminos y condiciones aceptados");
  } else {
    console.log("Terminos y condiciones rechazados");
  }
});
