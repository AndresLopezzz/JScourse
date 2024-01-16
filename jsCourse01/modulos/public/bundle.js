'use strict';

const nombre$1 = "Andres";

const obtenerPosts = () => {
  return ["Post1", "Post2", "Post3"];
};

const nombree = "Andres";

const obtenerPostss = () => {
  return ["Post1", "Post2", "Post3"];
};

var obtenerUsuario = () => {
  return {
    nombre: "Andres",
    correo: "andre@gmail.com",
  };
};

/* 
	📌 Named Imports
*/

const nombre = "123";

console.log("Mi nombre es " + nombre$1);
console.log(obtenerPosts());

console.log("Mi nombre es " + nombree);
console.log(obtenerPostss());

console.log(nombre);
console.log(nombre$1);
console.log(obtenerPosts());
console.log(obtenerUsuario());
