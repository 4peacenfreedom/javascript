// Tarea JS trate de utilizar funciones para encapsular su codigo .

//**** REQUERIMIENTO 1 ****

//1-Crear una función que salude
// Crear una función llamada 'saludar' que tome un parámetro 'nombre' y retorne un saludo
// Solicitar al usuario ingresar su nombre y mostrar el saludo en la consola

// Definir la función 'saludar' que tome el parámetro 'nombre' y retorne un saludo
function saludar(nombre) {
  return "Hola, " + nombre + "!";
}

// Se solicita al usuario ingresar su nombre
let nombre = prompt("Ingresa tu nombre:");

// Se muestra el saludo en la consola
console.log(saludar(nombre));

//**** REQUERIMIENTO 2 ****

// Aca se define la función 'Mensajeexitoso' que toma un mensaje y lo muestra en la consola
function Mensajeexitoso(mensaje) {
  console.log(mensaje);
}

// Aca se define la función 'MensajeFallido' que toma un mensaje y lo muestra en la consola
function MensajeFallido(mensaje) {
  console.log(mensaje);
}

// Solicita al usuario ingresar su edad
let edad = parseInt(prompt("Ingresa tu edad:"));

// Verificar si la persona es mayor de edad y mostrar el resultado en la consola
if (edad >= 18) {
  // Llama a la función Mensajeexitoso con su mensaje
  Mensajeexitoso("Eres Mayor de Edad");
} else {
  // Llama a la función MensajeFallido con su mensaje
  MensajeFallido("Eres Menor de Edad");
}

// **** REQUERIMIENTO 3 ****

//3-Crear un objeto con información de un libro y mostrar una propiedad
// Crear un objeto llamado 'libro' con propiedades 'titulo', 'autor' y 'anio'
let libro = {
  titulo: "El Principe",
  autor: "Maquiavelo",
  year: "1998",
};
// Mostrar la propiedad "El libro fue escrito por : 'autor' " 'autor' del objeto en la consola
console.log(
  "El libro fue escrito por el autor $(libro.autor) en el año $(libro.year)"
);

// **** REQUERIMIENTO 4 ****

//4-Verificar si una cadena está vacía

// Se solicita al usuario ingresar una cadena o string
let cadena = prompt("Ingresa una cadena:");

// Se verifica si la cadena está vacía y se muestra el resultado en la consola dependiendo el caso
if (cadena === "") {
  console.log("La cadena está vacía.");
} else {
  console.log("La cadena no está vacía.");
}

// **** REQUERIMIENTO 5 ****

//5-Usar un switch para mostrar el día de la semana

// Se solicita al usuario que ingrese un número del 1 al 7
let dia = parseInt(prompt("Ingresa un número del 1 al 7:"));

// Se muestra el día de la semana correspondiente usando un switch
switch (dia) {
  case 1:
    console.log("Es Lunes");
    break;
  case 2:
    console.log("Es Martes");
    break;
  case 3:
    console.log("Es Miércoles");
    break;
  case 4:
    console.log("Es Jueves");
    break;
  case 5:
    console.log("Es Viernes");
    break;
  case 6:
    console.log("Es Sábado");
    break;
  case 7:
    console.log("Es Domingo");
    break;
  default:
    console.log("Número no válido. Ingresa un número del 1 al 7.");
    break;
}

// **** REQUERIMIENTO 6 ****

//6-Crear un array y mostrar la posicion 7 y 0
// Crear un array llamado 'Pokemones' con al menos 10 Especies

// Crear un array llamado 'Pokemones' con al menos 10 Especies
let Pokemones = [
  "Bicho",
  "Dragón",
  "Eléctrico",
  "Hada",
  "Lucha",
  "Fuego",
  "Volador",
  "Fantasma",
  "Tierra",
  "Agua",
];

// Mostrar la posición 7
console.log(Pokemones[7]);

// Mostrar la posición 0
console.log(Pokemones[0]);

// **** REQUERIMIENTO 7 ****

//7-Usar un operador lógico para verificar si un número está en un rango
// Solicitar al usuario ingresar un número
let numero = parseFloat(prompt("Ingresa un número:"));
// Verificar si el número está entre 1 y 10, y mostrar el resultado en la consola
if (numero >= 1 && numero <= 10) {
  console.log("El numero esta dentro del rango");
} else {
  console.log("El numero no esta dentro del rango");
}

// **** REQUERIMIENTO 8 ****

//8 Sumar dos números ingresados por el usuario

// Solicitar al usuario ingresar dos números
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
// Sumar los números y mostrar el resultado en la consola
let suma = numero1 + numero2;
console.log("La suma de los 2 numeros da un resultado de: " + suma);

// **** REQUERIMIENTO 9 ****

//9 Crear una constante y mostrarla en consola

// Crear una constante llamada 'pi' y asignarle un valor
const pi = 3.14;
// Mostrar el valor de 'pi' en la consola
console.log("El valor de pi es: " + pi);

// **** REQUERIMIENTO 10 ****

// 10 Verificar si una persona puede votar
// Instrucción: Solicitar al usuario ingresar su edad y nacionalidad. Crear una función que verifique si la persona puede votar. La persona puede votar si tiene 18 años o más y es de nacionalidad 'peruana' o 'colombiana'.

// Solicitar al usuario ingresar su edad y nacionalidad
let edad2 = parseInt(prompt("Ingresa tu edad:"));
let nacionalidad = prompt("Ingresa tu nacionalidad:");

// Función para verificar si la persona puede votar
function puedeVotar(edad2, nacionalidad) {
  // Verificar si la edad es mayor o igual a 18 y si la nacionalidad es 'peruana' o 'colombiana'
  if (
    edad2 >= 18 &&
    (nacionalidad.toLowerCase() === "peruana" ||
      nacionalidad.toLowerCase() === "colombiana")
  ) {
    return true; // La persona puede votar
  } else {
    return false; // La persona no puede votar
  }
}

// Llamar a la función para verificar si puede votar
if (puedeVotar(edad2, nacionalidad)) {
  console.log("Puedes votar.");
} else {
  console.log("No puedes votar.");
}

// **** REQUERIMIENTO 11 ****

//11  Determinar si una persona está en edad escolar
// Instrucción: Solicitar al usuario ingresar su edad y verificar si la persona está en edad escolar (de 6 a 18 años) o si es un adulto mayor (65 años o más).

// Solicitar al usuario ingresar su edad
let edad3 = parseInt(prompt("Ingresa tu edad:"));

// Función para verificar si la persona está en edad escolar o es adulto mayor
function verificarEdad(edad3) {
  if (edad3 >= 6 && edad3 <= 18) {
    return "Estás en edad escolar.";
  } else if (edad3 >= 65) {
    return "Eres un adulto mayor.";
  } else {
    return "No estás en edad escolar ni eres un adulto mayor.";
  }
}

// Llamar a la función para verificar la edad e imprimir el resultado
let resultado = verificarEdad(edad3);
console.log(resultado);
