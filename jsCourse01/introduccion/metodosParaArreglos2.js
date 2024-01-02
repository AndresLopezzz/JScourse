/* 📌 .indexOf()
	Obtenemos el primer index de un elemento.
	Si no hay elemento nos retorna -1
*/
const nombres = [
  "Carlos",
  "Rafael",
  "Estefania",
  "Rodrigo",
  "Rafael",
  "Gema",
  "Diana",
  "Sara",
];
let indexC = nombres.indexOf("Diana");
console.log((indexC += 1));

/* 
	📌 .lastIndexOf() 
	Obtenemos el último index de un elemento.
*/
let indexCf = nombres.lastIndexOf("Rafael");
console.log((indexCf += 1));

/* 	
	📌 .forEach()
	Nos permite ejecutar una funcion por cada elemento
*/
nombres.forEach((nombre, index) => {
  console.log(`Hola ${nombre} (${(index += 1)})`);
});

/* 
	📌 .find()
	Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos.
*/
const resultado = nombres.find((nombre) => {
  if (nombre[0] === "E") {
    return nombre;
  }
});
console.log(resultado);

/* 
	📌 .map()
	Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo
	en base a los resultados de esa función.
*/
const mayus = nombres.map((n) => {
  return n.toUpperCase();
});
console.log(mayus);

/* 📌 .filter()
	Nos permite ejecutar una función por cada elemento 
	y luego crear un arreglo en base a los resultados de esa función. 
*/
const letras4 = nombres.filter((n) => {
  if (n.length === 4) {
    return n;
  }
});
console.log(letras4);

/* 
	📌 .includes()
	Nos permite saber si el arreglo contiene un elemento especificado 
*/
console.log(nombres.includes("Julio"));

/* 
	📌 .every()
	Nos permite ejecutar un condicional sobre cada elemento y 
	nos devuelve true si TODOS los elemento cumplieron la condición.
*/
const validName = nombres.every((n) => {
  if (typeof n === "string") {
    return true;
  } else {
    return false;
  }
});
console.log("¿Todos los nombres son validos? " + validName);

/* 
	📌 .some()
	Nos permite ejecutar un condicional sobre cada elemento y
	nos devuelve true si algun elemento cumplio la condición.
*/
const validName1 = nombres.some((n) => {
  if (typeof n === "string") {
    return true;
  } else {
    return false;
  }
});
console.log("¿El arreglo es invalido?" + validName1);
