console.log(window.innerWidth);
console.log(window.innerHeight);

/* 
	📌 window.open()
	Nos permite abrir ventanas del navegador
	Nota: Es posible que el navegador te pida permisos para abrir una nueva ventana.

	- 1er parametro: Dirección de la nueva ventana
	- 2do parametro: Nombre de la ventana
	- 3er parametro: Cadena de texto de opciones

	Nos devuelve un objeto para aceder a esa ventana
*/
let ventana;
const abrirVentana = () => {
  ventana = window.open("", "New", "width=500, height=500");
  ventana.document.write("<h1>Holi</h1>");
};

const cerrarVentana = () => {
  ventana.close();
};

/*
	📌 Screen Object
	Representa la pantalla del usuario.
*/
console.log("Ancho de pantalla.", window.screen.width);
console.log("Alto de pantalla.", window.screen.height);
