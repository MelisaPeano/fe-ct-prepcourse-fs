function esNuloOIndefinido(funcion){
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:
  return funcion === null || typeof funcion === 'undefined';
}



module.exports = esNuloOIndefinido;