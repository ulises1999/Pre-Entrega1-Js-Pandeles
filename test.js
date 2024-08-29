const combustibles = [
  {
    nombre: "nafta",
    vencineras: [
      {
        name: "ypf",
        categorías: [
          { name: "super", price: 200 },
          { name: "infinia", price: 400 },
        ],
      },
      {
        name: "shell",
        categorías: [
          { name: "super", price: 350 },
          { name: "vpower", price: 550 },
        ],
      },
      {
        name: "axion",
        categorías: [
          { name: "super", price: 600 },
          { name: "cuantium", price: 700 },
        ],
      },
    ],
  },
  {
    nombre: "diesel",
    vencineras: [
      {
        name: "ypf",
        categorías: [
          { name: "diesel", price: 200 },
          { name: "vpowerdiesel", price: 400 },
        ],
      },
      {
        name: "shell",
        categorías: [
          { name: "evolux", price: 350 },
          { name: "vpowerdiesel", price: 550 },
        ],
      },
      {
        name: "axion",
        categorías: [
          { name: "diesel", price: 600 },
          { name: "cuantiumdiesel", price: 700 },
        ],
      },
    ],
  },
];

const combustibleSeleccionado = "nafta";
const presupuesto = 10000;

function calcularLitrosPorVencinera(presupuesto) {
  const combustible = combustibles.find((combustible) => combustible.nombre === combustibleSeleccionado);
  for (const vencinera of combustible.vencineras) {
    for (const categoria of vencinera.categorías) {
      const litrosEstacion = presupuesto / categoria.price;
      console.log(`En ${vencinera.name} podes cargar ${litrosEstacion.toFixed(2)} litros de ${combustible.nombre} ${categoria.name}`);
    }
  }
}
calcularLitrosPorVencinera(presupuesto);
