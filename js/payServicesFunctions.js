const btnPayLuz = document.querySelector("#btnPayServiceLuz");
const btnPayAgua = document.querySelector("#btnPayServiceAgua");
const btnPayGN = document.querySelector("#btnPayServiceGN");
const btnPayPSP = document.querySelector("#btnPayServicePSP");
const btnPayXGP = document.querySelector("#btnPayServiceXGP");

function payService (monto, service){
  if(service==btnPayPSP||service==btnPayXGP){
    alert("Este servicios estan pagos. Podes seguis jugando tranqui")
    return}
    saldoDisp = saldoDisp - monto;
    updateSaldo();
    alert("Pagaste la factura por un monto de $"+monto);
    service.classList.add("paid-service");
    service.classList.remove("pending-pay-service");
}

btnPayLuz.addEventListener('click', ()=> payService(14000,btnPayLuz));
btnPayAgua.addEventListener('click', ()=> payService(2000,btnPayAgua));
btnPayGN.addEventListener('click', ()=> payService(9000,btnPayGN));
btnPayPSP.addEventListener('click', ()=> payService(1000,btnPayPSP));
btnPayXGP.addEventListener('click', ()=> payService(1000,btnPayXGP));