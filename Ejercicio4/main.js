//Definimos la variable numeroFranjas ara guardar el dato 
//pedimos ques se introduzca el numero de franjas que va a tener la bandera
let numeroFranjas = parseInt(prompt("Introduce el número de franjas que tiene la bandera:"));

//comprobamos que el numeroFranjas introducido es válido y repetimos la petición si fuera necesario
while(isNaN(numeroFranjas) || numeroFranjas <= 0 || numeroFranjas > 5){
    numeroFranjas = parseInt(prompt("Valor incorrecto. Por favor, introdúcelo de nuevo:"));
}

//definimos el array de colores posibles que puede tener la bandera
//y las variables que van a guardar la posición y el nombre del color que seleccionamos en el array
let arrayColores = ["red", "yellow", "green", "white", "blue", "brown", "pink", "black"];
let color, numPosicion;

//abrimos el documento html para escribir en él
document.open();

//abrimos la tabla y la fila
document.writeln(`
    <table>
        <tr>
`);

//APARTADO A
/* 
//con un bucle, vamos introduciendo las franjas de la bandera y les asignamos un color aleatorio
for(let i=0; i<numeroFranjas; i++){
    numPosicion = Math.floor(Math.random() * arrayColores.length);
    color = arrayColores[numPosicion];
    document.writeln(`<td style="background-color: ${color}"></td>`);
}
*/


//APARTADO B
/*
//definimos un array para guardar las posiciones de los colores que vayamos usando
//definimos longitud para no acceder todo el rato a la propiedad length del array
//definimos repetido para controlar las comprobaciones
let coloresUsados = [], longitud = 0, repetido;
//con un bucle, vamos introduciendo las franjas de la bandera y les asignamos un color aleatorio
for(let i=0; i<numeroFranjas; i++){
    numPosicion = Math.floor(Math.random() * arrayColores.length);

    //inicializamos el booleano a false
    repetido = false;

    //comporbamos si el color ya ha sido usado
    for(let j=0; j<longitud && !repetido; j++){
        if(numPosicion === coloresUsados[j]){
            repetido = true;
        }
    }

    //si el color sobrevive a la comprobación, lo usamos y lo guardamos en el array
    if(!repetido){
        coloresUsados[longitud] = numPosicion;
        longitud++;
        color = arrayColores[numPosicion];
        document.writeln(`<td style="background-color: ${color}"></td>`);
    } else { //si no, decrementamos i para repetir la iteración
        i--;
    }  
}
*/

//APARTADO C
//definimos una variable para guardar la posición del color anterior, indefinida al principio
let posicionAnterior;

//elegimos el primer color sin restricciones
numPosicion = Math.floor(Math.random() * arrayColores.length);
color = arrayColores[numPosicion];
posicionAnterior = numPosicion;
document.writeln(`<td style="background-color: ${color}"></td>`);

//con un bucle, vamos introduciendo las franjas de la bandera y les asignamos un color aleatorio
for(let i=1; i<numeroFranjas; i++){
    //generamos un color aleatorio
    numPosicion = Math.floor(Math.random() * arrayColores.length);

    //si es distinto al anterior, lo usamos
    if(numPosicion != posicionAnterior){
        color = arrayColores[numPosicion];
        document.writeln(`<td style="background-color: ${color}"></td>`);
        posicionAnterior = numPosicion;
        
    //si no, decrementamos i para repetir la iteración
    } else {
        i--;
    }
}


//Cerramos la fila y la tabla
document.writeln(`
        </tr>   
    </table>`
);

//cerramos el documento
document.close();
