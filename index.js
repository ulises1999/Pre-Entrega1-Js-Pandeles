const vehiculos = [
    { nombre: "Sandero", modelo: ["life 1.6", "itens 1.6", "itens 1.6 CVT"], precio: ["23100000", "25050000", "25700000"] },
    { nombre: "Koleos", modelo: "Koleos", precio: 52450000 },
    { nombre: "Kardian", modelo: ["Evolution 150 MT", "Evolution 200 EDC", "Techno 200 EDC", "Premiere Edition 200 EDC"], precio: ["25800000", "28000000", "29200000", "29950000"] },
    { nombre: "Megane", modelo: "Megane", precio: 71000000 }
];

function generarPlanesDePago(precio, cuotas, interes) {
    const plan = (precio + (precio * interes)) / cuotas;
    alert(`El plan elegido es de ${cuotas} cuotas de $${plan.toFixed(2)} cada una con un interés del ${(interes * 100).toFixed(2)}%.`);
    console.log(`El plan elegido es de ${cuotas} cuotas de $${plan.toFixed(2)} cada una con un interés del ${(interes * 100).toFixed(2)}%.`);
}

function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let cuotasPagadas;
let cuotasRestantes;
let montoCuota;
function realizarSorteo(cuotas,precio,cuotasPagadas,cuotasRestantes,montoCuota) {
    let numerosElegidos = [];
    for (let i = 0; i < 5; i++) {
        let numero;
        do {
            numero = parseInt(prompt(`Ingrese el número ${i + 1} (entre 0 y 100):`));
        } while (isNaN(numero) || numero < 0 || numero > 100 || numerosElegidos.includes(numero));
        numerosElegidos.push(numero);
    }

    alert(`Tus números elegidos son: ${numerosElegidos.join(", ")}`);

    let numeroSorteo = generarNumeroAleatorio(0, 5);
    alert(`El número sorteado es: ${numeroSorteo}`);

    let aciertos = numerosElegidos.filter(numero => numero === numeroSorteo).length;
    // let cuotasPagadas;
    // let cuotasRestantes;
    // let montoCuota;
    if (aciertos > 0) {
        if (cuotas == 3) {
            cuotasPagadas = 1;
            cuotasRestantes = (cuotas - cuotasPagadas);
            montoCuota = (precio/cuotas); 
            alert(`¡Felicidades! Has acertado ${aciertos} número(s) en el sorteo.`);
            alert(`Por lo tanto, ya cuentas con ${cuotasPagadas} cuota pagada, te restarian ${cuotasRestantes} de ${montoCuota.toFixed(2)} `)
        } else if (cuotas == 6) {
            cuotasPagadas = 2;
            cuotasRestantes = cuotas - cuotasPagadas;
            montoCuota = precio/cuotas; 
            // Mensaje para 2 cuotas pagadas
           alert(`¡Felicidades! Has acertado ${aciertos} número(s) en el sorteo.`);
           alert(`Por lo tanto, ya cuentas con ${cuotasPagadas} cuotas pagadas, te restarian ${cuotasRestantes} de ${montoCuota.toFixed(2)} `)
        } else {
            cuotasPagadas = 4;
            cuotasRestantes = cuotas - cuotasPagadas;
            montoCuota = precio/cuotas; 
            // Mensaje para 4 cuotas pagadas (cuotas == 12)
           alert(`¡Felicidades! Has acertado ${aciertos} número(s) en el sorteo.`);
           alert(`Por lo tanto, ya cuentas con ${cuotasPagadas} cuotas pagadas, te restarian ${cuotasRestantes} de ${montoCuota.toFixed(2)} `)
        }

    } else {
        alert("No has acertado ningún número, pero gracias por participar.");
    }
}

alert("Bienvenidos a concesionarias ODIN");
alert("Tenemos estos vehículos: Sandero, Koleos, Kardian, Megane");
let vehiculoElegido = prompt("Ingrese el vehículo elegido").trim();

let modeloElegido = "";
let precio = 0;

while (true) {
    const vehiculo = vehiculos.find(v => v.nombre.toLowerCase() === vehiculoElegido.toLowerCase());

    if (!vehiculo) {
        alert(`Por favor ingrese un vehículo disponible y recuerde escribirlo tal cual está.`);
        vehiculoElegido = prompt("Ingrese el vehículo elegido").trim();
        continue; // Vuelve al inicio del ciclo si no se encuentra el vehículo
    }

    if (Array.isArray(vehiculo.modelo)) {
        while (true) {
            alert(`Contamos con los siguientes modelos: ${vehiculo.modelo.join(", ")}`);
            let modeloElegidoUsuario = prompt(`¿Cuál es el modelo que te interesa?`).trim();
            
            let indexModelo = vehiculo.modelo.findIndex(modelo => modelo.toLowerCase() === modeloElegidoUsuario.toLowerCase());

            if (indexModelo !== -1) {
                modeloElegido = vehiculo.modelo[indexModelo];
                precio = parseInt(vehiculo.precio[indexModelo]);
                alert(`El precio es $ ${vehiculo.precio[indexModelo]}`);
                if (confirm(`¿Desea comprarlo?`)) break;
            } else {
                alert(`Por favor ingrese un modelo válido.`);
            }
        }
    } else {
        modeloElegido = vehiculo.modelo;
        precio = vehiculo.precio;
        alert(`El valor de este vehículo es: $${vehiculo.precio}`);
        if (confirm(`¿Desea comprarlo?`)) break;
    }
    break; // Salir del ciclo principal si se confirma la compra
}
let cuotas= parseInt(prompt("Ingrese la cantidad de cuotas: 3, 6, o 12"));
if (precio > 0) {
    let interes = 0;
    if (cuotas === 3) {
        interes = 0.05; // 5% de interés para 3 cuotas
    } else if (cuotas === 6) {
        interes = 0.1; // 10% de interés para 6 cuotas
    } else if (cuotas === 12) {
        interes = 0.2; // 20% de interés para 12 cuotas
    } else {
        alert("Cantidad de cuotas no válida. Se seleccionará 3 cuotas por defecto.");
        cuotas = 3;
        interes = 0.05;
    }
    generarPlanesDePago(precio, cuotas, interes);
    console.log("El vehiculo elegido es:" + vehiculoElegido);
    console.log("El modelo elegido es:" + modeloElegido);
    console.log(`La cantidad de cuotas elegidas es: ${cuotas}`);

}


if (confirm("Gracias por comprar en concesionarias ODIN, ¿quieres participar en el sorteo para descontar 1/3 del valor total?")) {
    realizarSorteo(cuotas,precio,cuotasPagadas,cuotasRestantes,montoCuota);
}
