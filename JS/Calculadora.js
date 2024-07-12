console.log("Funcionando Calculadora")

function Calcular(event) {
    event.preventDefault();
    const Num1 = document.getElementById("Num1").value;
    const Num2 = document.getElementById("Num2").value;
    const Resultado = document.getElementById("Resultado");

    let calculo = Num1 + Num2 ;
    Resultado.textContent = `El resultado es ${calculo}`

}