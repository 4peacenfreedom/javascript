console.log("Esta funcionando");
function calcular() {}

// PARA LA CALCULADORA

$(document).ready(function () {
  let screen = $(".calculator-screen");
  let screenValue = "";

  $(".btn").click(function () {
    let buttonValue = $(this).val();
    if (buttonValue === "=") {
      try {
        screenValue = eval(screenValue);
      } catch {
        screenValue = "Error";
      }
    } else if (buttonValue === "C") {
      screenValue = "";
    } else {
      screenValue += buttonValue;
    }
    screen.val(screenValue);
  });
});
