class Usuario {
  constructor(name, mail) {
    this.name = name;
    this.mail = mail;
  }

  static borrarUsuario(id_usuario) {
    console.log(
      "El usuario con el id: " + id_usuario,
      "ha sido borrado de la base de datos."
    );
  }

  static registrados = 1000;
}

// const usuario = new Usuario("Andres", "arrocito@gmail.com");
// usuario.borrarUsuario(1);

Usuario.borrarUsuario(1);
console.log(Usuario.registrados);
