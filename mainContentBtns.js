// funcion para conseguir la fecha actual
function getFechaHyM() {
  const fecha = new Date();
  const fechaFormateada = fecha.toLocaleDateString();
  return fechaFormateada;
}

// declaro un saldo inicial
let saldoDisp = 100000;

// funcion para mostrar y ocultar pestañas
const toggleShow = (seccion) => {
  document
    .querySelector(".section-wrap-show")
    .classList.add("section-wrap-hidden");
  document
    .querySelector(".section-wrap-show")
    .classList.remove("section-wrap-show");
  seccion.classList.add("section-wrap-show");
  seccion.classList.remove("section-wrap-hidden");
  toggleSidebar();
};

// Mostrar Inicio //
const inicioDiv = document.querySelector("#incioWrap");

document
  .querySelector("#inicioShow")
  .addEventListener("click", () => toggleShow(inicioDiv));

// Cambiar mostrar / ocultar saldo //

const valorOculto = " ***";
let saldoEnPantalla = valorOculto;
const saldoSpan = document.querySelector("#saldoDisp");
const btnSaldo = document.querySelector("#saldoButton");
const verSaldo = () => {
  if (saldoEnPantalla == valorOculto) {
    saldoEnPantalla = parseInt(saldoDisp);
    btnSaldo.innerHTML = "Ocultar saldo";
    saldoSpan.textContent = saldoEnPantalla;
    btnSaldo.addEventListener("click", () => {
      btnSaldo.innerHTML = "Mostrar Saldo";
    });
  } else if (saldoEnPantalla != valorOculto) {
    saldoEnPantalla = valorOculto;
    btnSaldo.innerHTML = "Mostrar saldo";
    saldoSpan.textContent = saldoEnPantalla;
    btnSaldo.addEventListener("click", () => {
      btnSaldo.innerHTML = "Ocultar Saldo";
    });
  }
};
function updateSaldo() {
  saldoEnPantalla = saldoDisp;
  saldoSpan.textContent = saldoEnPantalla;
}
btnSaldo.addEventListener("click", verSaldo);

// Transferencia //

const toggleTransferShowButton = document.querySelector("#transferShow");
const submitFormButton = document.querySelector("#submitTransferencia");

const transferFormDiv = document.querySelector("#transferFormWrap");

// array que contiene los objetos de Transferencia
let transferencias = [];

function Transferencia(alias, monto) {
  this.movimiento = "Transferencia";
  this.alias = alias;
  this.monto = monto;
  this.fecha = getFechaHyM();
}

function getFormData() {
  const alias = document.querySelector("#aliasTransferencia").value;
  const monto = document.querySelector("#montoTransferencia").value;
  const nuevaTransferencia = new Transferencia(alias, monto);
  transferencias.unshift(nuevaTransferencia);
  saldoDisp = saldoDisp - nuevaTransferencia.monto;
  alert("La tranferencia se realizó con exito!");
}

submitFormButton.addEventListener("click", getFormData);
submitFormButton.addEventListener("click", updateSaldo);

toggleTransferShowButton.addEventListener("click", () =>
  toggleShow(transferFormDiv)
);
document
  .querySelector("#accesoRapidoTransferencia")
  .addEventListener("click", () => {
    toggleShow(transferFormDiv);
    toggleSidebar();
  });

// Historial Movimientos //

const showMovementsHistory = document.querySelector(
  "#historialMovimientosShow"
);
const msgVacio = document.querySelector("#historialVacioMsg");
const panelHistorial = document.querySelector("#historyPanelWrap");
const logHistory = document.querySelector("#log-history");

const historyDiv = document.querySelector("#historyPanelWrap");

function transferenciaHistoryLog(alias, monto, fecha, movimiento) {
  const aliasData = document.createElement("p");
  aliasData.textContent = alias;
  const movimientoData = document.createElement("p");
  movimientoData.textContent = movimiento;
  const montoData = document.createElement("p");
  montoData.textContent = "- $" + monto;

  if (movimiento == "Transferencia") {
    montoData.classList.add("monto-transferencia");
  }

  const fechaData = document.createElement("p");
  fechaData.textContent = fecha;
  const logWrap = document.createElement("div");
  logWrap.classList.add("log-wrap");
  const movimientoDataWrap = document.createElement("div");
  movimientoDataWrap.classList.add("momiviento-wrap");
  movimientoDataWrap.append(movimientoData);
  movimientoDataWrap.append(aliasData);
  movimientoDataWrap.append(montoData);
  logWrap.append(fechaData);
  logWrap.append(movimientoDataWrap);
  logHistory.append(logWrap);
}

function updateHistory() {
  transferencias.forEach((element) =>
    transferenciaHistoryLog(
      element.alias,
      element.monto,
      element.fecha,
      element.movimiento
    )
  );
  transferencias = [];
  document
    .querySelector("#historialVacioMsg")
    .setAttribute("style", "display:none;");
}

submitFormButton.addEventListener("click", updateHistory);
showMovementsHistory.addEventListener("click", () => toggleShow(historyDiv));
document
  .querySelector("#accesoRapidoMovimientos")
  .addEventListener("click", () => {
    toggleShow(historyDiv);
    toggleSidebar();
  });

// Covertir divisa

const showConvertirDivisa = document.querySelector("#cambioDivisasBtn");
const conversionDivisaDiv = document.querySelector("#seccionConvertirMoneda");
showConvertirDivisa.addEventListener("click", () =>
  toggleShow(conversionDivisaDiv)
);
document
  .querySelector("#accesoRapidoConvertir")
  .addEventListener("click", () => {
    toggleShow(conversionDivisaDiv);
    toggleSidebar();
  });

// Función para realizar la conversión de moneda
const btnRealizarConversion = document.getElementById("btnRealizarConversion");
const resultadoConversion = document.getElementById("resultadoConversion");

btnRealizarConversion.addEventListener("click", () => {
  const monto = parseFloat(document.getElementById("monto").value);

  // Tasa de conversión: 1 USD = 350 ARS
  const tasaConversion = 350;
  const resultado = monto / tasaConversion;

  resultadoConversion.textContent = `${monto} ARS son aproximadamente ${resultado.toFixed(
    2
  )} USD`;
});
