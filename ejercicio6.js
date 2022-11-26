/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo: https://raw.githubusercontent.com/mouredev/
 *   mouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

let img = document.querySelector('img')

function aspectRatio(url){
    img.src = url
    let AR = img.width / img.height
    console.log(img.width)
    console.log(img.height)
    console.log(`Aspect Ratio: ${AR}:1`)
}

aspectRatio("https://wallpaperaccess.com/full/1132043.jpg")