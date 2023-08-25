let transferencias = [];



function Transferencia (alias, monto){
  this.movimiento = "Transferencia"
  this.alias = alias;
  this.monto = monto;
  this.fecha = getFechaHyM();
}

function getFormData (){
  const alias = document.querySelector("#aliasTransferencia").value;
  const monto = document.querySelector("#montoTransferencia").value;
  const nuevaTransferencia = new Transferencia(alias, monto);
  transferencias.unshift(nuevaTransferencia);
  saldoDisp = saldoDisp - nuevaTransferencia.monto
  alert("La tranferencia se realizó con exito!")
};
const submitFormButton = document.querySelector("#submitTransferencia");
submitFormButton.addEventListener('click', getFormData);
submitFormButton.addEventListener('click', updateSaldo);
