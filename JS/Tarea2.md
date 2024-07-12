# Práctica 1: Solicitud de Información

## Objetivo

Modificar el código JavaScript para manejar la lógica de una solicitud de información y actualizar el HTML para que los elementos y etiquetas sean consistentes.

## Instrucciones

### HTML:

Utiliza el siguiente código HTML para crear el formulario de solicitud de información:

```html
<h2>Solicitud de Información</h2>
<form id="formularioSolicitud">
    <label for="nombre">Nombre:</label>
    <input type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre">
    <br><br>
    <label for="email">Correo Electrónico:</label>
    <input type="text" name="email" id="email" placeholder="Ingrese su correo electrónico">
    <br><br>
    <label for="asunto">Asunto:</label>
    <input type="text" name="asunto" id="asunto" placeholder="Ingrese el asunto">
    <br><br>
    <label for="mensaje">Mensaje:</label>
    <textarea name="mensaje" id="mensaje" placeholder="Ingrese su mensaje"></textarea>
    <br><br>
    <label for="copia">¿Desea recibir una copia?:</label>
    <select name="copia" id="copia">
        <option value="si">Sí</option>
        <option value="no">No</option>
    </select>
    <br><br>
    <input type="submit" value="Enviar Solicitud" onclick="enviarSolicitud(event)">
</form>
<div id="resultado"></div>

## JavaScript:

Escribe una función JavaScript llamada `enviarSolicitud` que se ejecute cuando el formulario sea enviado. Esta función debe:

- Prevenir el comportamiento por defecto del formulario.
- Obtener los valores de los campos del formulario.
- Crear un mensaje de resultado con los valores ingresados.
- Mostrar el resultado en el `div` con el ID `resultado`.

Instrucciones adicionales:

- Asegúrate de que los elementos HTML sean seleccionados correctamente por sus IDs.
- Si el usuario selecciona "Sí" en la opción de recibir una copia, incluye un mensaje adicional indicando que se enviará una copia de la solicitud a su correo electrónico.

# Práctica 2: Calculadora de IMC (Índice de Masa Corporal)

## Objetivo

Crear una calculadora que permita a los usuarios calcular su IMC basado en su peso y altura y mostrar la categoría correspondiente.

```html
<h2>Calculadora de Índice de Masa Corporal (IMC)</h2>
<form>
    <label for="peso">Peso (kg):</label>
    <input type="text" name="peso" id="peso" placeholder="Ingrese su peso en kg">
    <br><br>
    <label for="altura">Altura (m):</label>
    <input type="text" name="altura" id="altura" placeholder="Ingrese su altura en metros">
    <br><br>
    <input type="submit" value="Calcular" onclick="calcularIMC(event)">
</form>
<p id="resultado"></p>
```

# Función JavaScript para Calcular el IMC

Escribe una función JavaScript llamada `calcularIMC` que se ejecute cuando el formulario sea enviado. Esta función debe:

1. Prevenir el comportamiento por defecto del formulario.
2. Obtener los valores de los campos de peso y altura.
3. Calcular el IMC utilizando la fórmula: `IMC = peso / (altura * altura)`.
4. Determinar la categoría correspondiente basándose en el valor del IMC:
   - IMC < 18.5: Bajo peso
   - 18.5 <= IMC < 24.9: Peso normal
   - 25 <= IMC < 29.9: Sobrepeso
   - IMC >= 30: Obesidad
5. Mostrar el IMC calculado y la categoría en el elemento con el ID `resultado`.
