console.log("Funcionando Calculadora")
//Global



function Calculadora2(event) {
    event.preventDefault();
    const Resultado = document.getElementById("Resultado");
    const Num1 =parseFloat(document.getElementById("Num1").value);
    const Num2 =parseFloat(document.getElementById("Num2").value);
    const operaciones = document.getElementById("operaciones").value;
    let calculo ;

    switch (operaciones) {
        case "+":
            calculo = Num1 + Num2;
            
            break;
        case "-":
                calculo = Num1 - Num2;
            break;
        case "*":
                calculo = Num1 * Num2;
            break;
        case "/":
                calculo = Num1 / Num2;
            break;
        default:
                calculo = "Operacion no valida"
            break;
    }
    Resultado.textContent = `El Resultado es : ${calculo} `


   

}


// function Sumar(event) {
//     event.preventDefault();

 

//     //parsefloat convierte string a decimal
//     //parseint convierte string a int

//     let calculo = parseFloat(Num1.value) +  parseFloat(Num2.value) ;
//     Resultado.textContent = `El resultado es ${calculo}`
    
// }

// function Restar(event) {
    

//     //parsefloat convierte string a decimal
//     //parseint convierte string a int

//     let calculo = parseFloat(Num1.value) - parseFloat(Num2.value) ;
//     Resultado.textContent = `El resultado es ${calculo}`
// }