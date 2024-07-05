// Inician en la posicion 0
let Paises = ["CR", "USA", "PA"];

// Visualizar [Posicion]
console.log(Paises);
console.log(Paises[1]);
console.log(Paises[2]);

// Objeto Representa algo de la vida real. Auto, Celular, Estudiante Compu
// Clave : Valor String, Integer, Boolean, Array, Function

// Declarar el siguiente objeto Auto, declararle 4 propiedades/claves (array, boolean, int, string)
// Mostrar en consola todo

let Auto = {
  Marca: "Korando",
  Año: 2014,
  Choques: true,
  PaisesDeViaje: ["CR", "KR", "USA"],
  Capacidad: [1, 2, 4, 5],
};

console.log(Auto.Marca);
console.log(Auto.PaisesDeViaje[1]);

console.table(Auto);
console.error(Auto);
console.warn(Auto);

let mensaje = "La Marca del auto es " + Auto.Marca + "y es del año " + Auto.Año;

// patron literal
let mensaje2 = `La Marca del auto es ${Auto.Marca}, y posee la cantidad de ${Auto.Capacidad} puertas`;

// Operadores Aritmeticos
let suma = 5 + 3;
let resta = 3 - 5;
let multiplicar = 5 * 2;
let division = 8 / 2;
let mod = 10 % 3;

// Comparacion
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");
console.log(5 > 3);
console.log(5 < 1);

// Logicos
// && = AND
// !! = OR
console.log(true && false);
console.log(true || false);

// 4- Estructuras de control
if (condition) {
} else {
}

let pato = true;
if ((pato = true)) {
  alert("Pato " + pato);
} else {
  //si no
  alert("No cumple");
}

let edad = 18;
if (edad == 18) {
  alert("Eres mayor de edad");
} else {
  alert("No eres mayor de edad");
}
