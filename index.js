const vehiculos = {
    sandero: {
        modelos: ["life 1.6", "itens 1.6", "itens 1.6 CVT"],
        precios: [23100000, 25050000, 25700000],
        imagenes: ["./images/Sandero-life1.6.png", "./images/Sandero-itens1.6.png", "Sandero-itens1.6-CVT.png"]
    },
    koleos: {
        modelos: ["Koleos"],
        precios: [52450000],
        imagenes: ["./images/Koleos.PNG"]
    },
    kardian: {
        modelos: ["Evolution 150 MT", "Evolution 200 EDC", "Techno 200 EDC", "Premiere Edition 200 EDC"],
        precios: [25800000, 28000000, 29200000, 29950000],
        imagenes: ["./images/Kardian-Evolution-150-MT.PNG", "./images/Kardian-Evolution-200-EDC.png", "./images/Kardian-Techno-200-EDC.png", "./images/Premiere-Edition-200-EDC.png"]
    },
    megane: {
        modelos: ["Megane"],
        precios: [71000000],
        imagenes: ["./images/Koleos.PNG"]
    }
};

let precioSeleccionado = 0;
let cuotasSeleccionadas = 0;

function guardarEnLocalStorage(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}

function obtenerDeLocalStorage(clave) {
    return JSON.parse(localStorage.getItem(clave));
}

document.getElementById('vehiculo').addEventListener('change', function() {
    const vehiculoSeleccionado = this.value;
    guardarEnLocalStorage('vehiculoSeleccionado', vehiculoSeleccionado);

    const modeloSelect = document.getElementById('modelo');
    const imagenesContainer = document.getElementById('imagenes');

    modeloSelect.innerHTML = '<option value="">--Seleccionar--</option>';
    imagenesContainer.innerHTML = '';

    if (vehiculos[vehiculoSeleccionado]) {
        vehiculos[vehiculoSeleccionado].modelos.forEach((modelo, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = modelo;
            modeloSelect.appendChild(option);
        });

        modeloSelect.disabled = false;
    }
});

document.getElementById('modelo').addEventListener('change', function() {
    const vehiculoSeleccionado = obtenerDeLocalStorage('vehiculoSeleccionado');
    const modeloSeleccionado = this.value;
    guardarEnLocalStorage('modeloSeleccionado', modeloSeleccionado);

    const imagenesContainer = document.getElementById('imagenes');
    const planCuotas = document.getElementById('planCuotas');

    imagenesContainer.innerHTML = '';

    if (vehiculos[vehiculoSeleccionado]) {
        const img = document.createElement('img');
        img.src = vehiculos[vehiculoSeleccionado].imagenes[modeloSeleccionado];
        imagenesContainer.appendChild(img);

        precioSeleccionado = vehiculos[vehiculoSeleccionado].precios[modeloSeleccionado];
        guardarEnLocalStorage('precioSeleccionado', precioSeleccionado);
        planCuotas.style.display = 'block';
    }
});

document.getElementById('cuotas').addEventListener('change', function() {
    cuotasSeleccionadas = parseInt(this.value);
    guardarEnLocalStorage('cuotasSeleccionadas', cuotasSeleccionadas);

    let interes = 0;
    switch(cuotasSeleccionadas) {
        case 3:
            interes = 0.05;
            break;
        case 6:
            interes = 0.1;
            break;
        case 12:
            interes = 0.2;
            break;
    }

    const valorCuota = (precioSeleccionado * (1 + interes)) / cuotasSeleccionadas;
    document.getElementById('valorCuotaSpan').textContent = `$${valorCuota.toFixed(2)}`;
    document.getElementById('valorCuota').style.display = 'block';
    document.getElementById('confirmarCompra').style.display = 'block';
});

document.getElementById('confirmarCompra').addEventListener('click', function() {
    const sorteoDiv = document.getElementById('sorteo');
    sorteoDiv.style.display = 'block';
});

document.getElementById('participarSorteo').addEventListener('click', function() {
    const numerosElegidos = [];
    document.querySelectorAll('.numeroSorteo').forEach(input => {
        const numero = parseInt(input.value);
        if (!isNaN(numero) && numero >= 0 && numero <= 100) {
            numerosElegidos.push(numero);
        }
    });

    if (numerosElegidos.length === 5) {
        guardarEnLocalStorage('numerosElegidos', numerosElegidos);

        const numeroSorteo = Math.floor(Math.random() * 11);
        const imagenesContainer = document.getElementById('imagenes');
        imagenesContainer.innerHTML = `<p>El número sorteado es: ${numeroSorteo}</p>`;

        const aciertos = numerosElegidos.filter(numero => numero === numeroSorteo).length;
        let mensaje = aciertos > 0 ? `¡Felicidades! Has acertado ${aciertos} número(s) en el sorteo.` : "No has acertado ningún número, pero gracias por participar.";

        let cuotasPagadas = 0;
        switch(cuotasSeleccionadas) {
            case 3:
                cuotasPagadas = 1;
                break;
            case 6:
                cuotasPagadas = 2;
                break;
            case 12:
                cuotasPagadas = 4;
                break;
        }

        const cuotasRestantes = cuotasSeleccionadas - cuotasPagadas;
        const montoCuota = (precioSeleccionado / cuotasSeleccionadas).toFixed(2);

        if (aciertos > 0) {
            mensaje += `<br>Por lo tanto, ya cuentas con ${cuotasPagadas} cuota(s) pagada(s). Te restan ${cuotasRestantes} cuotas de $${montoCuota} cada una.`;
        }

        imagenesContainer.innerHTML += `<p>${mensaje}</p>`;
    } else {
        alert("Debes ingresar exactamente 5 números válidos.");
    }
});

// Cargar datos del LocalStorage al cargar la página
window.addEventListener('load', function() {
    const vehiculoSeleccionado = obtenerDeLocalStorage('vehiculoSeleccionado');
    if (vehiculoSeleccionado) {
        document.getElementById('vehiculo').value = vehiculoSeleccionado;
        document.getElementById('vehiculo').dispatchEvent(new Event('change'));

        const modeloSeleccionado = obtenerDeLocalStorage('modeloSeleccionado');
        if (modeloSeleccionado) {
            document.getElementById('modelo').value = modeloSeleccionado;
            document.getElementById('modelo').dispatchEvent(new Event('change'));
        }

        const cuotasSeleccionadas = obtenerDeLocalStorage('cuotasSeleccionadas');
        if (cuotasSeleccionadas) {
            document.getElementById('cuotas').value = cuotasSeleccionadas;
            document.getElementById('cuotas').dispatchEvent(new Event('change'));
        }
    }
});
