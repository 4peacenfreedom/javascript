document.addEventListener("DOMContentLoaded", () => {
  Mostrar_Footer();
});

const Opciones_Footer = [
  { Nombre: "Terminos y Condiciones", Ruta: "term.html", Activo: true },
  { Nombre: "Politica de Privacidad", Ruta: "privacidad.html", Activo: true },
  { Nombre: "Contacto", Ruta: "contacto.html", Activo: true },
];

function Mostrar_Footer() {
  let Contenedor = document.getElementById("V_Lista_Footer");

  let Plantilla;

  Opciones_Footer.forEach((element) => {
    if (element.Activo) {
      Plantilla += `
        <li class="list-inline-item"><a href="${element.Ruta}" class="text-white">${element.Nombre}</a></li>
        `;
    }
  });

  Contenedor.innerHTML = Plantilla;
}
