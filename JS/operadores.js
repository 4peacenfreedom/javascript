//Inician en la posicion 0
let Paises = ["CR", "USA", "PA"];

//Visualizar[posicion]
console.log(Paises); //Muestra todo Array
console.log(Paises[1]);
console.log(Paises[2]);

//Objeto Representa algo de la vida real Auto, Celular, Estudiante, Compu
//CLAVE : VALOR String,Integer,Boolean,Array,Funcion

let Estudiante = {
  NombreCompleto: "Pedro",
  Edad: 20,
  Activo: true,
  Materias: ["Progra1", "Base De datos", "Calculo"],
};

console.log(Estudiante); //Muestra todo  Objeto
//Visualizar.Clave
console.log(Estudiante.Nombre);
console.log(Estudiante.Materias[2]);

// Declaren el siguiente Objeto Auto:  4 propiedades string,int,boolean y array

const Auto = {
  Marca: "Toyota",
  Puertas: 4,
  Extras: true,
  Capacidad: [1, 2, 4],
};
let mensaje =
  "La Marca del auto es " +
  Auto.Marca +
  "posee la cantidad de puertas " +
  Auto.Puertas;

//patron literal

let mensaje2 = `La Marde del auto es ${Auto.Marca}  posee la cantidad de puertas,${Auto.Puertas}  `;

console.table(mensaje2);

//3 Operadores
//Aritmeticos
let suma = 5 + 3;
let resta = 3 - 5;
let multi = 5 * 2;
let div = 8 / 2;
let mod = 10 % 3;

//Comparacion
console.log(5 == "5"); //== igualdad debil
console.log(5 === "5"); //== igualdad fuerte
console.log(5 != "5"); //false
console.log(5 !== "5"); //true
console.log(5 > 3); //true
console.log(5 < 1); //false
//logicos
//&& = AND
//|| = OR
console.log(true && false);
console.log(true || false);
