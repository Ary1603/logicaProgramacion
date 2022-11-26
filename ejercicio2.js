/*Escribir un programa que reciba 2 palabras (String) 
y retorne verdadero o faso (Bool) segun las palabras sean iguales*/

function palabrasIguales(palabra1, palabra2) {
    if (palabra1.length != palabra2.length) {
        return false
    } else {
        for (let i = 0; i < palabra1.length; i++) {
            if (palabra1[i] != palabra2[i]) {
                return false
            } 
        }
        return true
    }
}

let iguales = palabrasIguales('Hola', 'Hola')
console.log(iguales)