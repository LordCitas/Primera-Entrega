//Definimos los arrays y las variables que vamos a usar
let array = [], valor, inicial, final, temp;

//Pedimos que se introduzcan los números del array
for(let i=0; i<10; i++){
    valor = parseInt(prompt(`Introduce el número de la posición ${i}:`));

    //Repetimos la petición si el valor introducido no es un número
    while(isNaN(valor)){
        valor = parseInt(prompt(`Valor incorrecto, introdúcelo de nuevo:`));
    }

    //Añadimos el valor al array
    array.push(valor);
}

//Abrimos el flujo de salida 
document.open();

//Mostramos el array original
document.writeln(`Array original: [${array}]<br>`);

//Pedimos las posiciones inicial y final, y repetimos la peticiones si no son correctas
inicial = parseInt(prompt("Introduce la posición inicial (0-9):"));
while(isNaN(inicial) || inicial<0 || inicial>9){
    inicial = parseInt(prompt("Valor incorrecto, introdúcelo de nuevo:"));
}

final = parseInt(prompt("Introduce la posición final (0-9):"));
while(isNaN(final) || final<0 || final>9 || final<=inicial){
    final = parseInt(prompt("Valor incorrecto, introdúcelo de nuevo:"));
}   

//guardamos el último valor del array para no perderlo
temp = array[9];

//movemos los valores del final del array
for(let i = 9; i>final; i--){
    array[i] = array[i-1];
}

//colocamos el valor de la posición inicial en la final
array[final] = array[inicial];

//movemos los valores del principio del array
for(let i = inicial; i>0; i--){
    array[i] = array[i-1];
}

//colocamos el valor guardado al principio del array
array[0] = temp;

//mostramos el array resultante
document.writeln(`Array nuevo: [${array}]<br>`);
document.close();

