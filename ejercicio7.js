/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */
const cadenaInvertida = []

function invertir(cadena){
    for (let i = cadena.length; i >= 0 ; i--) {
        cadenaInvertida.push(cadena[i])
    }
    console.log(cadenaInvertida.join(''))
}
invertir("Hola mundo")