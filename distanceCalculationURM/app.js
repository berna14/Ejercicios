let botonCalculo = document.querySelector(".calcular");
let resultadoCalculo = document.querySelector(".resultado");

botonCalculo.addEventListener("click", () => {
  let velocidadMRU = +prompt("Enter velocity (km/h)");
  let tiempoMRU = +prompt("Enter time (h)");
  let calculoMRU = velocidadMRU * tiempoMRU;
  resultadoCalculo.textContent = calculoMRU + " km";
  if (calculoMRU === null || calculoMRU === "" || calculoMRU === 0) {
    resultadoCalculo.textContent = "Insufficient data. Try Again.";
  }
});
