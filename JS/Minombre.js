
//Formulario 
//Nombre y Apelllido 
//Y al darle click , Mostrar en un DIV 

console.log("funcionando")





function Guardar(event) {
    event.preventDefault();
    
    const Formulario = document.getElementById("Formulario");
    const valor1 = document.getElementById("valor1").value; //Value obtengo la informacion que digita el usuario
    const valor2 = document.getElementById("valor2").value;
    const valorrespuesta = document.getElementById("valorrespuesta");

    //alert(`El valor1 es ${valor1} el valor 2 es ${valor2}` )

    valorrespuesta.textContent=`El valor1 es ${valor1} el valor 2 es ${valor2}`

    debugger
}