

//Console.log -Mostrar
//Alert--Mostrar
//prompt--Ingresar


//DOM
//Documento Object Model 
//documento obtenerporid(Aqui ID).Propiedad = Valor 


//Seleccionar el elemento del DOM por el ID y cambiar el contenido
//document.getElementById("resultado").textContent = "Hola Mundo"
//Seleccionar el elemento del DOM por el ID y cambiar el BG
//document.getElementById("resultado").style.backgroundColor= "blue"

let DivResultado = document.getElementById("resultado")

console.log(DivResultado)


DivResultado.textContent = "Hola Mundo"
DivResultado.style.backgroundColor ="red"

let ParrafoTexto = document.getElementById("texto")

ParrafoTexto.textContent= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perspiciatis optio voluptate ab consectetur voluptatibus hic beatae, omnis tempore aut minima ipsa aliquid enim aspernatur. Nam aspernatur reprehenderit dignissimos sint."
ParrafoTexto.style.backgroundColor ="green"
//Obtener el valor actual del DOM 
let titulo = document.getElementById("titulo").value;

// titulo.textContent = "Gato"
// titulo.innerHTML = "perro"
 
console.log(titulo)

let nuevoparrafo = document.createElement("p")
nuevoparrafo.textContent = "contenidop de la etiqueta "
//Agregar Etiquetas CreateElemente al HTML
DivResultado.appendChild(nuevoparrafo)

console.log(nuevoparrafo)
