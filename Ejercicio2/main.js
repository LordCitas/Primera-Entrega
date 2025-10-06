//Definimos la variable numero para guardar el dato
//pedimos su valor y nos aseguramos de que sea válido
let numero = parseInt(prompt("Introduce el número de kilómetros que recorre el corredor en un día:"));
while(!isNaN(numero) && numero < 0) {
    numero = parseInt(prompt("Valor incorrecto. Por favor, introdúcelo de nuevo:"));
}

//convierto el número de kilómetros diarios a semanales
numero *= 7;

//abrimos el documento para escribir en él
document.open();
document.writeln(`<p>El corredor recorre ${numero} kilómetros por semana</p>`);

//usamos un switch para diferenciar cada caso
switch(numero){
    case numero <= 10:
        document.writeln("<p>Es un corredor novato</p>");
    break;
    case numero > 10 && numero <= 30:
        document.writeln("<p>Es un corredor iniciado</p>");
    break;
    case numero > 30 && numero <= 40:
        document.writeln("<p>Es un corredor experto</p>");
    break;
    default:
        document.writeln("<p>Es un corredor de élite</p>");
}

//cerramos el documento
document.close();
