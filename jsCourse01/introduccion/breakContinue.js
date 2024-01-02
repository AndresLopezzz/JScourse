/* 
	📌 Break
	La sentencia break nos sirve para salir de bloques de tipo Switch.
	Pero tambien nos sirve para forzar la salida de un ciclo.
*/

const nombres = [
  "Arturo",
  "Andres",
  "Alejandro",
  "Roberto",
  "Adrian",
  "Antonio",
  "Angel",
];

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i][0] !== "A") {
    console.log("Hay un nombre que no tiene la letra A, alto.");
    console.log(nombres[i] + " mo empieza por la letra A");
    break;
  }
  console.log(nombres[i]);
}

/* 
	📌 Continue
	La sentencia continue nos sirve para saltar a la siguiente iteración.
*/

const invitados = [
  "Carlos",
  "Christian",
  "Christoher",
  "Valeria",
  "Estefania",
  "Erika",
  "Manuel",
];
console.log("Lista de personas aceptadas:");

for (let i = 0; i < invitados.length; i++) {
  if (invitados[i] === "Valeria") {
    continue;
  }
  console.log(invitados[i]);
}
