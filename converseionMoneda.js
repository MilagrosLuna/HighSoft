 // Función para realizar la conversión de moneda
 const btnRealizarConversion = document.getElementById("btnRealizarConversion");
 const resultadoConversion = document.getElementById("resultadoConversion");

 btnRealizarConversion.addEventListener("click", () => {
   const monto = parseFloat(document.getElementById("monto").value);

   // Tasa de conversión: 1 USD = 350 ARS
   const tasaConversion = 350;
   const resultado = monto / tasaConversion;

   resultadoConversion.textContent = `${monto} ARS son aproximadamente ${resultado.toFixed(2)} USD`;
 });