const annualInterestRate = 1.7199;

function finalAmount (){
  let requestedAmount = document.querySelector("#montoPrestamo").value;
  let paymentDeadline = (document.querySelector("#termInMonths").value) / 12;
  const totalIncrement = (paymentDeadline * annualInterestRate).toFixed(2);
  const finalDebt = "$"+(requestedAmount * totalIncrement);
  return finalDebt;
};

function showFinalAmount (){
  const resultDiv = document.querySelector("#laonResult");
  const reultInScreen = document.querySelector("#totalCost");

  reultInScreen.value = finalAmount();
};
showFinalAmount()
document.querySelector("#btnEnviarPrestamo").addEventListener('click', ()=>{
  alert("Su solicitud será revisada por personal del banco.")
})