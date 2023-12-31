/* 📌 Local Scope o Variables Locales
	- Son las variables declaradas dentro de una función.
	- Solo podemos acceder a ellas desde dentro de la función.
*/

var numero = 1;

var obtNumLetras = (nombre) => {
  var num = nombre.length;

  console.log(nombre + " Tiene " + num, "de letras");
};
obtNumLetras("Andres");
console.log(numero);
