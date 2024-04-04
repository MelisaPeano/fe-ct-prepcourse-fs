function calcularAreaTriangulo(base, altura) {
    // Fórmula del área de un triángulo: (base * altura) / 2
    var area = (base * altura) / 2;
    return area;
}

// Ejemplo de uso de la función
var base = 5;
var altura = 7;
var area = calcularAreaTriangulo(base, altura);
console.log("El área del triángulo con base " + base + " y altura " + altura + " es: " + area);