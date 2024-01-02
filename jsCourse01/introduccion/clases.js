/*
	📌 Estructura de una clase:
	- Definición
	- Propiedades: La clase puede contener variables. Dentro de una clase se llaman propiedades.
	- Constructor: Es un metodo especial para inicializar un objeto creado a partir de una clase.
	- Métodos: La clase puede contener funciones. Dentro de una clase se llaman metodos.
*/

class usuarios {
  tipo = "usuario";

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;

    console.log("Nuevo usuario registrado. ");
  }

  obtenerNombreCompleto() {
    console.log("Obteniendo datos...");
    return `${this.nombre} ${this.apellido}`;
  }
}

const usuario = new usuarios("Andres Felipe", "Lopez Cabrera");
console.log(usuario.obtenerNombreCompleto());

const usuario2 = new usuarios("Valeria Maria", "Awad Colona");
console.log(usuario2.obtenerNombreCompleto());
