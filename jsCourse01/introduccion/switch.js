const usuario = {
  nombre: 'Andres',
  pais: 'Colombia',
};

  if (usuario.pais === 'Colombia') { 
    console.log('El usuario es Colombiano');
  } else if (usuario.pais === 'Español') {
    console.log('El usuario es Español');
  } else if (usuario.pais === 'Mexico') {
    console.log('El usuario es Mexicano ');
  } else {
    console.log('El usuario es de otro pais' );
  }

switch(usuario.pais) {
  case 'Colombia':
    console.log('El usuario es Colombiano');
    break;
  case 'Mexico':
    console.log('El usuario es Mexicano ');
    break;
  case 'España':
    console.log('El usuario es Español');
    break;
  default:
    console.log('El usuario es de otro pais');
}