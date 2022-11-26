/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function areaPoligonos(base, altura) {
    let triangulo = (base * altura) / 2
    let cuadrado = base * base
    let rectangulo = base * altura
    return {
        'Area_triangulo': triangulo,
        'Area_cuadrado': cuadrado,
        'Area_rectangulo': rectangulo
    }
}

let prueba = areaPoligonos(7, 10)
console.log(prueba)