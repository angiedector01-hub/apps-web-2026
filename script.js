// Esperamos a que el documento cargue
document.addEventListener("DOMContentLoaded", function () {
  const titulo = document.getElementById("titulo");

  // Agregamos un evento de clic al título
  titulo.addEventListener("click", function () {
    alert("¡Has hecho clic en el título!");
    console.log("Evento de clic ejecutado correctamente en la consola.");
  });

  console.log("Script cargado y listo.");
});
