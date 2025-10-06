//Definimos la variable presupuesto para guardar el dato
//pedimos su valor y nos aseguramos de que sea válido
let presupuesto = parseInt(prompt("Introduce el presupuesto del que se dispone en la obra:"));
while(isNaN(presupuesto)){
    numero = parseInt(prompt("Valor incorrecto. Por favor, introdúcelo de nuevo:"));
}

//abrimos el documento para escribir en él
document.open();
if(presupuesto < 0){ //mensaje de error si el presupuesto es negativo
    document.writeln("<h1>Error: el presupuesto introducido es negativo</h1>");
} else { //en caso contrario, hacemos los cálculos
    //definimos las variables para los cálculos
    let materiales = presupuesto * 0.5, manoObra = presupuesto * 0.2, licencias = presupuesto * 0.3;
    
    document.writeln(`<p>Presupuesto de la obra: ${presupuesto}€</p>`);
    document.writeln(`<p>Dedicado a materiales (50%): ${materiales}€</p>`);
    document.writeln(`<p>Dedicado a la mano de obra (20%): ${manoObra}€</p>`);
    document.writeln(`<p>Dedicado a licencias de obra (30%): ${licencias}€</p>`);
}

//cerramos el documento
document.close();
