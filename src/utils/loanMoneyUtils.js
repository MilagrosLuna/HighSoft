export const getFinalAmount =(wantedAmount, paymentTime, annualInterest, setResultTo)=>{
  let requestedAmount = wantedAmount;
  let paymentDeadline = paymentTime / 12;
  const totalIncrement = (paymentDeadline * annualInterest).toFixed(2);
  const finalDebt = (requestedAmount * totalIncrement).toFixed(2);
  setResultTo(finalDebt);
  console.log(finalDebt);
};

export const confirmLoan = (totalCost) =>{
  const confirmMessage = "¿Esta seguro que desea solicitar el prestamo por un costo de $"+totalCost+"?"
  const confirm = window.confirm(confirmMessage);
  if (confirm) {
    alert("Se envió su solicitud para ser revisada.");
  } else {
    alert("La solicitud ha sido cancelada.");
  }
};