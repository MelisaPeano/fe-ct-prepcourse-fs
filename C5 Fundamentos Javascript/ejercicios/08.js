function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  return Number.isInteger(numero);
}

module.exports = esNumeroEntero; 

// Number.isSafeInteger()
// El método isInteger(num) es un método estático que devuelve 
// true si el argumento es un valor numérico sin parte decimal, 
// es decir, un número entero.