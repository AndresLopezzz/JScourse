/*
	📌 Operadores de Comparación:
	==		Igual que
	===		Igual en valor y tipo de valor
	!=		Diferente
	!==		Diferente en valor y diferente en tipo
	>		Mayor que
	<		Menor que
	>=		Mayor o igual que
	<=		Menor o igual que
	?		Operador ternario

	📌 Operadores Lógicos 
	&& 	And
	||	OR
	! 	NOT
*/

// 📌 Estructura de una condicional
// if (true) {
// Código a ejecutar
// }

const usuario = {
  pais: "Colombia",
  edad: 17,
  ticket: true,
};

if (usuario.edad > 17 && usuario.ticket) {
  console.log("Usuario es mayor de edad y tiene un ticket, puede entrar.");
} else if (usuario.edad > 17 && usuario.ticket === false) {
  console.log("Usuario es mayor de edad y no tiene ticket, no puede entrar.");
} else {
  console.log("usuario es menor de edad, no puede entrar");
}
