function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
    const fechaNacimientoObj = new Date(fechaNacimiento);
    const añoNacimiento = fechaNacimientoObj.getFullYear();
    const añoActual = (new Date()).getFullYear();
    
    const edad = añoActual - añoNacimiento;
    
    return edad > 18;
  
}

module.exports = esMayorDeEdad;

// const fechaActual = new Date();
// const añoActual = fechaActual.getFullYear();

// console.log("El año actual es:", añoActual);
// Este código creará un nuevo objeto Date que representa la fecha y hora 
// actuales, luego llamará al método getFullYear() en ese objeto para obtener 
// el año actual, que luego se almacenará en la variable añoActual. Finalmente,
//  se imprimirá el año actual en la consola.