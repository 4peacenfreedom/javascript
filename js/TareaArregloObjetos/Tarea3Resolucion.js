let series = [
  { id: 1, Serie: "Ana", Categoria: "Drama", Temporadas: 2 },
  {
    id: 2,
    Serie: "Stranger Things",
    Categoria: "Ciencia Ficción",
    Temporadas: 4,
  },
  { id: 3, Serie: "The Crown", Categoria: "Historia", Temporadas: 5 },
  { id: 4, Serie: "La Casa de Papel", Categoria: "Crimen", Temporadas: 5 },
];

let personas = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Juan" },
  { id: 3, nombre: "Pedro" },
  { id: 4, nombre: "Juana" },
];
let animales = [
  { id: 1, nombre: "Lolo", apellido: "Drama", edad: 2 },
  { id: 2, nombre: "Firulai", apellido: "Drama", edad: 2 },
  { id: 3, nombre: "Manchas", apellido: "Drama", edad: 2 },
  { id: 4, nombre: "Bruno", apellido: "Drama", edad: 2 },
];
let plantas = [
  { id: 1, nombre: "Menta", apellido: "Drama", edad: 2 },
  { id: 2, nombre: "Pastora", apellido: "Drama", edad: 2 },
  { id: 3, nombre: "Rosa", apellido: "Drama", edad: 2 },
  { id: 4, nombre: "Veranera", apellido: "Drama", edad: 2 },
];
function mostrarNombres(datos) {
  datos.forEach((element) => {
    console.log(element.nombre);
  });
}
// Ejemplo de uso:
mostrarNombres(personas);
mostrarNombres(animales);
mostrarNombres(plantas);

//2

function longitud(datos) {
  datos.forEach((element) => {
    console.log(element.series.length);
  });
}
