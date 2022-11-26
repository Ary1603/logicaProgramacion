/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */
const numerosPrimos = []
let contador = 0
for (let i = 2; i < 101; i++) {
    contador = 0
    for (let divisor = 1; divisor <= 100; divisor++) {
        let primo = i % divisor
        if(primo == 0 ){
            contador = contador + 1
        }
    }
    if(contador < 3){
        numerosPrimos.push(i)
    }
}
console.log(numerosPrimos)