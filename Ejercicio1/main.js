let numero = parseInt(prompt("Introduce un número entero mayor que 0:"));
let divisores = [];
let sumaCuadrados = 0;

function calcularDivisores(){
    for(let i=1; i<numero; i++){
        if(numero%i === 0){
            divisores.push(i);
        }
    }
    return divisores
}

function sumarCuadrados(){
    divisores.forEach(function(divisor) {
        sumaCuadrados += divisor*divisor;
    });
    return sumaCuadrados;
}

divisores = calcularDivisores();
sumaCuadrados = sumarCuadrados();

function mostrarDivisores(){
    alert(`Los divisores de ${numero} son: ${divisores}`);
}

function mostrarSumaCuadrados(){
    alert(`La suma de los cuadrados de los divisores de ${numero} es: ${sumaCuadrados}`);
}

function comprobarSuma(){
    (Math.sqrt(sumaCuadrados) % 1 == 0)?
    alert(`${sumaCuadrados}, la suma de cuadrados de los divisores de ${numero}, es un cuadrado perfecto`)
    :  alert(`${sumaCuadrados}, la suma de cuadrados de los divisores de ${numero}, NO es un cuadrado perfecto`);
}

while(numero <= 0 || isNaN(numero)){
    numero = parseInt(prompt("Número inválido. Introduce un número entero mayor que 0:"));
}

