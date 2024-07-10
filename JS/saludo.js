//document.getElementById("resultado").textContent = "Hola Mundo";
//document.getElementById("resultado").style.backgroundColor = "blue";

let DivResultado = document.getElementById("resultado");
console.log(DivResultado);

DivResultado.textContent = "Hola Mundo";
DivResultado.style.backgroundColor = "red";

let pTag = document.getElementById("test1");
console.log(pTag);

pTag.textContent = "Esto es un parrafo";
pTag.style.backgroundColor = "green";

let titulo = document.getElementById("titulo").value;
// titulo.textContent = "GATO";
// titulo.innerHTML = "PEZ";

console.log(titulo);

let nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un nuevo parrafo";

DivResultado.appendChild(nuevoParrafo);

console.log("nuevoParrafo");
