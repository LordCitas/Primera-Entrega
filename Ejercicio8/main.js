let mesas = [], numMesas, numClientes = 0, continuar = true, encontrada;

numMesas = parseInt(prompt("Introduce la cantidad de mesas del restaurante: "));
while (isNaN(numMesas) || numMesas <= 0){
    numMesas = parseInt(prompt("El valor no es válido. Introduce otro: "));
}

for (let i = 0; i<numMesas; i++){
    mesas[i] = Math.floor(Math.random() * 5);
}

document.open();

while(continuar){
    document.writeln(`<p>Mesas: [${mesas}]</p>`);

    numClientes = parseInt(prompt("Introduce la cantidad de clientes que van a cenar: "));
    while (isNaN(numClientes) || numClientes > 4){
        numClientes = parseInt(prompt(`Lo siento, no admitimos grupos de ${numClientes}, haga grupos de 4 personas como máximo e intente de nuevo`));
    }

    if(numClientes < 1){
        continuar = false;
    }else{
        document.writeln(`El usuario pide una mesa para ${numClientes}<br>`);

        encontrada = false;

        for(let i = 0; i < numMesas && !encontrada; i++){
            if(mesas[i] + numClientes <= 4){
                document.writeln(`Por favor, siéntese en la mesa ${i}<br><br>`);
                mesas[i] += numClientes;
                encontrada = true;
            }
        }

        if(!encontrada){
            document.writeln("Lo siento, no queda sitio en el restaurante<br><br>");
        }
    }
}


document.close();