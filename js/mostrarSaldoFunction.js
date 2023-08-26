let saldoDisp = 100000;

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
