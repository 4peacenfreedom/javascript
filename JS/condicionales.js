//4- Estructuras de control 

let Edad = 18;
if (Edad >= 18) {
    console.warn("Eres Mayor de Edad")
} else {
    console.error("Eres Menor de Edad :(")

}

const nombre = "Harry";
if (nombre == "Pedro") { //Si la condicion se cumple se muestra el mensaje 
    console.error("respuesta" + nombre)

}


const nombre2 = "Harry";
if (nombre2 == "Pedro") { //Si la condicion se cumple se muestra el mensaje 
    console.error("respuesta" + nombre2)

} else if (nombre2 == "Tobias") {
    console.error("respuesta" + nombre2)
} else if (nombre2 == "Hary") {
    console.error("respuesta" + nombre2)

} else {
    console.error("No se cumple")

}

const Persona = "pato";

if (Persona== "david") {

}
else if (Persona== "David") {

}
else if (Persona== "DAVID") {

}
else {

}

let MiPlataforma = "HBO";
let MiPlataforma2 = "amazon";

if(MiPlataforma === "HBO" && MiPlataforma2 === "Netflix" || MiPlataforma2 === "amazon"){
    console.log("Esta noche vemos una serie ")


}
else{
    console.log("Esta noche no vemos  una serie ")

}

//Operacidor ternario 

let Animal = "Tigre";

const saludo = Animal == "Mono"? "Hola"+Animal: "Hola Desconocido " 

console.log(saludo)

// Switch 

const EdadSwitch = 60

switch (EdadSwitch) {

    case 20:
            console.log("Tiene 20 ")
        break;

        case 40:
            console.log("Tiene 40 ")
        break;

        case 60:
            console.log("Tiene 60 ")
        break;

    default:
        console.log("no cumple con ninguna ")
        break;
}