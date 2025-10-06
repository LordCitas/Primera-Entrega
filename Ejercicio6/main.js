let array1 = [], array2 = [], arrayVistos = [], arrayRes = [], long1, long2;

//pedimos la longitud del array1
long1 = parseInt(prompt("Introduce el número de elementos que vas a introducir en el primer array:"));
//si no es válida, repetimos la petición
while(isNaN(long1) || long1 <= 0){
    long1 = parseInt(prompt("Error. Introduce un número válido:"));
}

//pedimos la longitud del array2
long2 = parseInt(prompt("Introduce el número de elementos que vas a introducir en el segundo array:"));
//si no es válida, repetimos la petición
while(isNaN(long2) || long2 <= 0){
    long2 = parseInt(prompt("Error. Introduce un número válido:"));
}

//pedimos las palabras del array1
for(let i=0; i<long1; i++){
    arrayRes.push(prompt(`Introduce el ${i}º elemento del primer array:`).toLowerCase());
}

//pedimos las palabras del array2
for(let i=0; i<long2; i++){
    arrayRes.push(prompt(`Introduce el ${i}º elemento del segundo array:`).toLowerCase());
}

//primer bucle de comparación
for(let i=0; i<long1; i++){
    if(!arrayVistos.contains(array1[i]) && !array2.contains(array1[i])){
        arrayRes.push(array1[i]);
    }
    if(!arrayVistos.contains(array1[i])){
        arrayVistos.push(array1[i]);
    }
}

//segundo bucle de comparación
for(let i=0; i<long1; i++){
    if(!arrayVistos.contains(array2[i])){
        arrayRes.push(array2[i]);
        arrayVistos.push(array2[i]);
    }
}
document.open();

    document.writeln(`<p>Array 1: [${array1}]</p>`);
    document.writeln(`<p>Array 2: [${array1}]</p>`);
    document.writeln(`<p>Elementos Vistos: [${arrayVistos}]</p>`);
    document.writeln(`<p>Elementos Independientes: [${arrayRes}]</p>`);

document.close();