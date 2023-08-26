// Funcion base //
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

// Mostrar Transferir Dinero //
const toggleTransferShowButton = document.querySelector("#transferShow");
const transferFormDiv = document.querySelector("#transferFormWrap");
toggleTransferShowButton.addEventListener("click", () =>
  toggleShow(transferFormDiv)
);
document
  .querySelector("#accesoRapidoTransferencia")
  .addEventListener("click", () => {
    toggleShow(transferFormDiv);
  });

// Mostrar Movimientos //
const historyDiv = document.querySelector("#historyPanelWrap");
const showMovementsHistory = document.querySelector(
  "#historialMovimientosShow"
);
showMovementsHistory.addEventListener("click", () => toggleShow(historyDiv));
document
  .querySelector("#accesoRapidoMovimientos")
  .addEventListener("click", () => {
    toggleShow(historyDiv);
  });

// Mostrar Convertidor Divisas //
const showConvertirDivisa = document.querySelector("#cambioDivisasBtn");
const conversionDivisaDiv = document.querySelector("#seccionConvertirMoneda");
showConvertirDivisa.addEventListener("click", () =>
  toggleShow(conversionDivisaDiv)
);
document
  .querySelector("#accesoRapidoConvertir")
  .addEventListener("click", () => {
    toggleShow(conversionDivisaDiv);
  });

// Mostrar Prestamos
const showLoanSection = document.querySelector("#loanSectionBtn");
const loanSectionDiv = document.querySelector("#seccionPrestamos");
showLoanSection.addEventListener("click", () => toggleShow(loanSectionDiv));
document
  .querySelector("#accesoRapidoPrestamo")
  .addEventListener("click", () => {
    toggleShow(loanSectionDiv);
  });
document
  .querySelector("#loanImg")
  .addEventListener("click", () => {
    toggleShow(loanSectionDiv);
  });
  // Mostrar Prestamos
const showPayServicesBtn = document.querySelector("#payServicesBtn");
const payServicesDiv = document.querySelector("#payServicesSection");
showPayServicesBtn.addEventListener("click", () => toggleShow(payServicesDiv));


