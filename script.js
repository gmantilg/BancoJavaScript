let nombre = "Gio"

function verificarCredenciales(usuario, contraseña) {

    const usuarioCorrecto = "usario";
    const contraseñaCorrecta = "laclave";
  
    return usuario === usuarioCorrecto && contraseña === contraseñaCorrecta;
  }
  
  //ingreso
  function ingresarAlBanco() {
    let intentos = 3;
  
    while (intentos > 0) {
      const usuario = prompt("Ingrese su usuario:");
      const contraseña = prompt("Ingrese su contraseña:");
  
      if (verificarCredenciales(usuario, contraseña)) {
        alert("¡Bienvenido al banco de la alegria!.");
        break; // Salir del ciclo 
      } else {
        intentos--;
        if (intentos > 0) {
          alert(`Clave incorrecta. Te quedan ${intentos} intentos.`);
        } else {
          alert("ya no tiene mas intentos. Acceso denegado :().");
        }
      }
    }
  }
  

  