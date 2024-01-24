/*
	📌 window.setTimeOut()
	Nos permite ejecutar una funcion despues de cierto tiempo.
*/

let tiempoInicio;
let id;

const iniciar = () => {
  console.log("Iniciando timer");
  tiempoInicio = Date.now();
  id = setTimeout(saludo, 5000);
};

const parar = () => {
  console.log("Parando timer");
  clearTimeout(id);
  calcularTiempoTranscurrido();
};

const calcularTiempoTranscurrido = () => {
  const tiempoFin = Date.now();
  const tiempoTranscurrido = tiempoFin - tiempoInicio;
  console.log(
    `Han pasado ${tiempoTranscurrido} milisegundos desde que se inició el temporizador.`
  );
};
