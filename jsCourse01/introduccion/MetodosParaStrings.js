/*
	📌 .length - Devuelve el número de caracteres de una cadena de texto.
*/
const texto = "Holi soy Andre!";
console.log(texto.length);

/*
	📌 .indexOf() .lastIndexOf() - Devuelve el index del primer/último caracter especificado.
*/
const texto1 = "Holi soy Andre!";
console.log(texto1.indexOf("o") + 1);
console.log(texto1.lastIndexOf("o") + 1);

/*
	📌 .slice() - Devuelve un fragmento de una cadena de texto.
	1er parametro - index desde donde queremos cortar
	2do parametro (opcional) - index hasta donde queremos cortar
*/

// const texto = 'Hola yo soy Carlos!';
// const index = texto.indexOf('s');
// const lastIndex = texto.lastIndexOf('s');
// console.log(texto.slice(index, lastIndex + 1));
// console.log(texto.slice(12, 18));
// console.log(texto.slice(-7, -1));
// console.log(texto);

/*
	📌 .replace() - Devuelve una cadena de texto en donde remplaza un valor por otro.
	1er parametro - el texto que queremos remplazar
	2do parametro - el texto que queremos poner
*/
const texto2 = "Hola soy Andre!";
console.log(texto2.replace("Andre", "Arroz"));

/*
	📌 .split() - Convierte una cadena de texto en un arreglo.
	Tenemos que especificar donde cortar cada elemento.

	1er parametro - el caracter que funcionara como separador.
*/
const texto3 = "Hola soy Andre!";
console.log(texto3.split(" "));

/*
	📌 .toUpperCase() .toLowerCase()
	Devuelve una cadena de texto de puras minisculas/mayusculas.
*/
// console.log(texto.toUpperCase());
// console.log(texto.toLowerCase());

/*
	📌 Métodos para eliminar espaciados:
	.trim() - Devuelve una cadena de texto (String)	
	que elimina los espacios en blanco al inicio y final de una cadena de texto.

	.trimStart() - Igual que .trim() pero solo elimina espacios del inicio.
	.trimEnd() - Igual que .trim() pero solo elimina espacios del final.
*/
const texto4 = "       Hola soy Andre!";
console.log(texto4);
console.log(texto4.trim());
console.log(texto4.trimStart());
console.log(texto4.trimEnd());
