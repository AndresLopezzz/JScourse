const arreglo = [
  "Texto",
  18.29,
  false,
  true,
  { propiedad: "valor" },
  [1, 2, 3],
];
console.log(arreglo);

console.log(arreglo[0]);

const colores = [];
colores[0] = "Rojo";
colores[1] = "Verde";
colores[3] = "Blanco";
colores[3] = "Amarillo";

console.log("El arreglo colores tiene: " + colores.length + " colores");
console.log(colores);

colores.push("Azul");
console.log(colores);
console.log("El arreglo colores tiene: " + colores.length + " colores");
