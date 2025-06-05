// js/script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    const nombre = document.getElementById("nombre").value.trim();
    const edad = parseInt(document.getElementById("edad").value);
    const acepto = form.querySelector("input[name='acepto']").checked;

    let errores = [];

    if (nombre === "") {
      errores.push("El nombre es obligatorio.");
    }

    if (isNaN(edad) || edad <= 0 || edad > 120) {
      errores.push("La edad debe estar entre 1 y 120.");
    }

    if (!acepto) {
      errores.push("Debes confirmar que no has sido mordido.");
    }

    if (errores.length > 0) {
      e.preventDefault(); // evita el envío
      alert("⚠️ Corrige los siguientes errores:\n\n" + errores.join("\n"));
    }
  });
});
