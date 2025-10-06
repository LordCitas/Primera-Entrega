let arrayColores = ["red", "yellow", "green", "white", "blue", "brown", "pink", "black"];
let arrayIntroducido = [], longitud, temp, contador = 0;

//pedimos la longitud del array
longitud = parseInt(prompt("Introduce el número de palabras que vas a escribir:"));
//si no es válida, repetimos la petición
while(isNaN(longitud) || longitud <= 0){
    longitud = parseInt(prompt("Error. Introduce un número válido:"));
}

//pedimos las palabras y las añadimos al array
for(let i=0; i<longitud; i++){
    arrayIntroducido.push(prompt(`Introduce la ${i+1}ª palabra:`).toLowerCase());
}

//comprobamos si las palabras introducidas están en el array de colores
for(let i=0; i<longitud; i++){
    //si estác contenida en arrayColores, cambiamos su posición
    if(arrayColores.includes(arrayIntroducido[i])){
        temp = arrayIntroducido[contador];
        arrayIntroducido[contador] = arrayIntroducido[i];
        arrayIntroducido[i] = temp;

        //incrementados el contador de cambios que hemos hecho
        contador++;
    }
}

//mostramos el array resultante
document.writeln(`<p>Array resultante: [${arrayIntroducido}]</p>`);

