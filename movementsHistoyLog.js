const msgVacio = document.querySelector("#historialVacioMsg");
const panelHistorial = document.querySelector("#historyPanelWrap");
const logHistory = document.querySelector("#log-history");

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
