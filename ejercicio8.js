/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

const palabras = []
let recolector = []
let a = 0
let contador = 0
function palabrasRepetidas(cadena) {
    cadena = cadena.toLowerCase() 
        for (let i = 0; i < cadena.length; i++) {
            if(cadena[i] != ' '){
                recolector.push(cadena[i])
            }
            
            if (cadena[i] == ' ' || i == cadena.length-1) {
                palabras.push(recolector.join(''))
                recolector = []
            }
        }
        

        for (let i = 0; i < palabras.length; i++) {
            for (let j = 0; j < palabras.length; j++) {
                if(i != j){
                    if (palabras[i] == palabras[j]) {
                        console.log("i: "+ palabras[i] + "  j: " + palabras[j])
                        contador = contador + 1
                    }
                }

            }
            console.log("contador: "+contador)
        }
        
}

palabrasRepetidas("Hola hola hola adios")