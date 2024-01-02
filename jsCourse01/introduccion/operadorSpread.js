/*
	📌 Operador Spread
	Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
*/
const frutas = ["Manzana", "Pera", "Piña", "Melon"];
const comidaFavorita = ["Pizza", "Sushi", ...frutas];
console.log(comidaFavorita);

const datosLogin = {
  name: "Andres",
  mail: "Aflopezc18@gmail.com",
  password: "123",
};

const datosUsuario = {
  ...datosLogin,
  name: "Juan",
  age: "27",
};

console.log(datosUsuario);

/*
	📌 Parametro Rest
	Permite que una funcion contenga un numero indefinido de argumentos.
	Los argumentos extra que encuentre los convertira en un arreglo.
*/
const registerUser = (name, email, ...datosAdicionales) => {
  console.log(name, email, datosAdicionales);
};

registerUser("Andres", "Andresito@gmail.com");
registerUser("Valeria", "Valeria@gmail.com", 19, "Colombia");

/*
	📌 Destructuración de objetos
	Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable.
*/
const amigos = ["Alejandro", "Cesar", "Manuel"];
const [primeroAmigo, segundoAmigo, tercerAmigo] = amigos;
console.log(segundoAmigo);

const persona = {
  nombre: "Carlos",
  edad: 27,
  pais: "México",
};

const { nombre, pais, edad } = persona;
console.log(nombre, pais);

const mostrarEdad = ({ nombre, edad }) => {
  console.log(`${nombre} tiene ${edad} años`);
};
mostrarEdad(persona);
