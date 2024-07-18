function calcularIMC(event) {
  // Prevenir el comportamiento por defecto del formulario
  event.preventDefault();

  // Obtener los valores de los campos de peso y altura
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  // Validar que los campos sean números y mayores que cero
  if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
    document.getElementById("resultado").textContent =
      "Por favor, ingrese valores válidos para el peso y la altura.";
    return;
  }

  // Calcular el IMC utilizando la fórmula del profe: IMC = peso / (altura * altura)
  const imc = peso / (altura * altura);

  // Determinar la categoría correspondiente basándose en el valor del IMC
  let categoria = "";
  if (imc < 18.5) {
    categoria = "Bajo peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    categoria = "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    categoria = "Sobrepeso";
  } else {
    categoria = "Obesidad";
  }

  // Mostrar el IMC calculado y la categoría en el elemento con el ID resultado
  // La funcion toFixed(2) permite formatear el numero a 2 decimales
  document.getElementById("resultadoIMC").innerHTML = `
        <p>Su IMC es: ${imc.toFixed(2)}</p>
        <p>Clasificación: ${categoria}</p>
    `;
}
