/*
	📌 .toString()
*/
const numero = 10;
console.log(numero, typeof numero);

const texto = numero.toString();
console.log(texto, typeof texto);

/*
	📌 .toFixed()
	Permite obtener un numero con la cantidad de decimales especificados
*/
const numero1 = 3.1416;
console.log(numero1.toFixed(0));

/*
	📌 parseInt()
	Intenta transformar un valor a un entero.
*/
//const numero2 = parseInt(prompt("Escribe un numero"));
//const numero3 = parseInt(prompt("Escribe un numero"));
//console.log(numero2 + numero3);

/*
	📌 .parseFloat()
	Intenta transformar un valor a un numero con decimales.
*/
//const numero4 = parseFloat(prompt("Escribe un numero"));
//const numero5 = parseFloat(prompt("Escribe un numero"));
//console.log(numero4 + numero5);

/*
	📌 Math.random()
	Genera un numero al azar entre 0 y 1
*/
const random = Math.random();
console.log(random);

/*
	📌 Math.floor()
	Redondea hacia abajo un numero.
*/
console.log(Math.floor("10.1"));
console.log(Math.floor("10.99"));

/*
	📌 Math.ceil()
	Redondea hacia arriba un numero.
*/
console.log(Math.ceil("10.1"));
console.log(Math.ceil("10.99"));

/*
	📌 Math.round()
	Redondea hacia el entero mas cercano
*/
console.log(Math.round("10.1"));
console.log(Math.round("10.99"));

/*
	📌 Ejemplo de numero al azar de 0 a 100
*/
const numero26 = Math.random();
console.log(Math.floor(numero26 * 101));
