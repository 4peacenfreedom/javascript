let Edad = 18;
if (Edad >= 18) {
  console.warn("Eres mayor de Edad");
} else {
  console.error("Eres Menor de Edad");
}

const Persona = "David";
if (Persona == "david") {
  console.log("El nombre esta escrito incorrectamente");
} else if (Persona == "David") {
  console.log("el nombre esta escrito correctamente");
} else {
  console.log("vuelve a intentarlo");
}

// Operador ternario

let Nombres = "Jose";

const saludo2 = Nombres == "Jose" ? "Si es Jose" : "Hola Desconocido";

console.log(saludo2);

let Animal = "Tigre";
const saludo = Animal == "Mono" ? "Hola" + Animal : "Hola Desconocido";
console.log(saludo);

// Switch
