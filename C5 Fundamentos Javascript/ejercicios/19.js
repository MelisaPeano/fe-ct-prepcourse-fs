function esPositivo(num) {

  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  switch (Number.isInteger(num)) {
    case (num > 0) :
      console.log (`es positivo`)
      break
    case (num < 0) :
      console.log (`es negativo`)
      break
    default :
      return false
  }
  
}

module.exports = esPositivo;