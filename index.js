// let vehiculos = ["Sandero", "Koleos", "Kardian", "Megane"];
// let koleos = "Koleos";
// let koleosPrecio = 52450000;
// let megane = "Megane";
// let meganePrecio = 71000000;
// let sandero = ["life 1.6", "itens 1.6", "itens 1.6 CVT"];
// let sanderPrecio = ["23100000", "25050000", "25700000"];
// let kardian = ["Evolution 150 MT", "Evolution 200 EDC", "Techno 200 EDC", "Premiere Edition 200 EDC"];
// let kardianprecios = ["25800000", "28000000", "29200000", "29950000"];

const vehiculos=[
   {nombre:"Sandero",
    modelo: ["life 1.6", "itens 1.6", "itens 1.6 CVT"],
    precio: ["23100000", "25050000", "25700000"]
   },
   {nombre: "Koleos",
    modelo: "Koleos",
    precio: 52450000
   },
   {nombre: "Kardian",
    modelo: ["Evolution 150 MT", "Evolution 200 EDC", "Techno 200 EDC", "Premiere Edition 200 EDC"],
    precio: ["25800000", "28000000", "29200000", "29950000"]
   },
   {nombre:"Megane",
    modelo:"Megane",
    precio:71000000
   }               
]

function generarPlanesDePago(precio, cuotas, interes) {
    const plan = (precio + (precio * interes)) / cuotas;
    alert(`El plan elegido es de ${cuotas} cuotas de $${plan.toFixed(2)} cada una con un interés del ${(interes * 100).toFixed(2)}%.`);
    console.log(`El plan elegido es de ${cuotas} cuotas de $${plan.toFixed(2)} cada una con un interés del ${(interes * 100).toFixed(2)}%.`);
}

// Función para generar un número aleatorio entre un rango
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Función para realizar el sorteo
function realizarSorteo() {
    let numerosElegidos = [];
    for (let i = 0; i < 5; i++) {
        let numero;
        do {
            numero = parseInt(prompt(`Ingrese el número ${i + 1} (entre 0 y 100):`));
        } while (isNaN(numero) || numero < 0 || numero > 100 || numerosElegidos.includes(numero));
        numerosElegidos.push(numero);
    }

    alert(`Tus números elegidos son: ${numerosElegidos.join(", ")}`);

    // Generar un único número aleatorio entre 0 y 100
    let numeroSorteo = generarNumeroAleatorio(0, 100);

    alert(`El número sorteado es: ${numeroSorteo}`);

    // Comparar los números elegidos con el número del sorteo
    let aciertos = numerosElegidos.filter(numero => numero === numeroSorteo).length;

    if (aciertos > 0) {
        alert(`¡Felicidades! Has acertado ${aciertos} número(s) en el sorteo.`);
    } else {
        alert("No has acertado ningún número, pero gracias por participar.");
    }
}

alert("Bienvenidos a concesionarias ODIN");
alert("Tenemos estos vehículos: Sandero, Koleos, Kardian, Megane");
let vehiculoElegido = prompt("Ingrese el vehículo elegido").trim();

// Variables para almacenar la elección del usuario
// let modeloElegido = "";
// let precio = 0;

// while (true) {
//     if (vehiculoElegido === vehiculos[0]) { // Sandero
//         while (true) {
//             alert(`Contamos con los siguientes modelos: ${sandero}`);
//             let modelosandero = prompt(`¿Cuál es el modelo que te interesa?`).trim();
//             if (modelosandero === sandero[0]) {
//                 modeloElegido = sandero[0];
//                 precio = parseInt(sanderPrecio[0]);
//                 alert(`El precio es $ ${sanderPrecio[0]}`);
//                 if (confirm(`¿Desea comprarlo?`)) break;
//             } else if (modelosandero === sandero[1]) {
//                 modeloElegido = sandero[1];
//                 precio = parseInt(sanderPrecio[1]);
//                 alert(`El precio es $ ${sanderPrecio[1]}`);
//                 if (confirm(`¿Desea comprarlo?`)) break;
//             } else if (modelosandero === sandero[2]) {
//                 modeloElegido = sandero[2];
//                 precio = parseInt(sanderPrecio[2]);
//                 alert(`El precio es $ ${sanderPrecio[2]}`);
//                 if (confirm(`¿Desea comprarlo?`)) break;
//             } else {
//                 alert(`Por favor ingrese un modelo válido.`);
//             }
//         }
//         break;
//     } else if (vehiculoElegido === vehiculos[1]) { // Koleos
//         modeloElegido = koleos;
//         precio = koleosPrecio;
//         alert(`El valor de este vehículo es: $${koleosPrecio}`);
//         if (confirm(`¿Desea comprarlo?`)) break;
//     } else if (vehiculoElegido === vehiculos[2]) { // Kardian
//         while (true) {
//             alert(`Contamos con los siguientes modelos: ${kardian}`);
//             let modeloKardian = prompt(`¿Cuál es el modelo que te interesa?`).trim();
//             if (modeloKardian === kardian[0]) {
//                 modeloElegido = kardian[0];
//                 precio = parseInt(kardianprecios[0]);
//                 alert(`El precio es: $ ${kardianprecios[0]}`);
//                 if (confirm(`¿Desea comprarlo?`)) break;
//             } else if (modeloKardian === kardian[1]) {
//                 modeloElegido = kardian[1];
//                 precio = parseInt(kardianprecios[1]);
//                 alert(`El precio es: $ ${kardianprecios[1]}`);
//                 if (confirm(`¿Desea comprarlo?`)) break;
//             } else if (modeloKardian === kardian[2]) {
//                 modeloElegido = kardian[2];
//                 precio = parseInt(kardianprecios[2]);
//                 alert(`El precio es: $ ${kardianprecios[2]}`);
//                 if (confirm(`¿Desea comprarlo?`)) break;
//             } else if (modeloKardian === kardian[3]) {
//                 modeloElegido = kardian[3];
//                 precio = parseInt(kardianprecios[3]);
//                 alert(`El precio es: $ ${kardianprecios[3]}`);
//                 if (confirm(`¿Desea comprarlo?`)) break;
//             } else {
//                 alert(`Por favor ingrese un modelo válido.`);
//             }
//         }
//         break;
//     } else if (vehiculoElegido === vehiculos[3]) { // Megane
//         modeloElegido = megane;
//         precio = meganePrecio;
//         alert(`El precio del Megane es: $${meganePrecio}`);
//         if (confirm(`¿Desea comprarlo?`)) break;
//     } else {
//         alert(`Por favor ingrese un vehículo disponible y recuerde escribirlo tal cual está.`);
//         vehiculoElegido = prompt("Ingrese el vehículo elegido").trim();
//     }
// }

// Si el usuario confirma la compra, se le permite elegir las cuotas
if (precio > 0) {
    let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: 3, 6, o 12"));

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
    console.log("El vehiculo elegido es:"+ vehiculoElegido);
    console.log("El modelo elegido es:"+ modeloElegido);
    console.log(`la cantidad de cuotas elegidas es:${cuotas}`);
}

// Llamar a la función del sorteo después de la compra
if (confirm("Gracias por comprar en concesionarias ODIN, ¿quieres participar en el sorteo para descontar 1/3 del valor total?")) {
    realizarSorteo();
}


