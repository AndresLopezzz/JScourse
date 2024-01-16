/* 
	📌 Named Imports
*/
import {
  nombre as nombreImportado,
  obtenerPosts,
  nombree,
  obtenerPostss,
} from "./namesExports";

const nombre = "123";

console.log("Mi nombre es " + nombreImportado);
0;
console.log(obtenerPosts());

console.log("Mi nombre es " + nombree);
console.log(obtenerPostss());

console.log(nombre);

/* 
	📌 Namespace Imports
*/
import * as datos from "./namesExports";
console.log(datos.nombre);
console.log(datos.obtenerPosts());
/* 
	📌 Default Imports
*/
import obtenerUsuario from "./defaultExport";
console.log(obtenerUsuario());
