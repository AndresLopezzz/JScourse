const personaArreglo = ['Carlos', 27, 'Correo@correo.com', true, true]

const persona = {
  nombre: 'Carlos',
  edad: 27,
  correo: 'correo@correo.com',
  subscripciones: {
    web: true,
    correo: true
  },
  coloresFav: ['Amarillo, Rojo', 'Negro'],
  saludo: function() {
    console.log('muy buenas a todos guapisimos')
  }
}

console.log(persona.saludo());
console.log(persona['edad']);


const variable = 'subscripciones';

persona.pais = 'Colombia';
console.log(persona.pais);
persona.saludo();
