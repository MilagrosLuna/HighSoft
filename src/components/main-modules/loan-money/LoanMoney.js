import React, { useState, useEffect } from "react";
import { getFinalAmount, confirmLoan } from "./loanMoneyUtils";


const LoanMoney = () => {
  const [requestedAmount, setRequestedAmout] = useState(null);
  const [paymentDeadline, setPaymentDeadline] = useState(null);
  const [result, setResult] = useState(0);

  const annualInterestRate = 1.7199;
  useEffect(()=>{
    getFinalAmount(requestedAmount, paymentDeadline, annualInterestRate, setResult)
  },[requestedAmount, paymentDeadline])

  const handleInput = (setter, event) => {
    setter(event.target.value);
  };
  


  return (
    <div
      style={{ width: 60 + "%" }}
      className="container py-3 mx-auto my-3 text-white text-center bg-rosa rounded"
    >
      <h3 className="text-white">Solicitar Préstamo</h3>
      <form>
        <label className="custom-label">
          Monto a solicitar:
          <input
            onChange={(event) => {
              handleInput(setRequestedAmout, event)
            }}
            required
            type="number"
            style={{ width: 50 + "%" }}
            className="text-center mx-auto my-2 form-control"
          />
        </label>
        <label className="custom-label">
          Elija un plazo de pago:
          <select
            onChange={(event) => handleInput(setPaymentDeadline, event)}
            style={{ width: 50 + "%" }}
            className="text-center mx-auto my-2 form-control"
          >
            <option value="">Seleccionar una opción &#8681;</option>
            <option value="12">12 cuotas</option>
            <option value="24">24 cuotas</option>
            <option value="36">36 cuotas</option>
          </select>
        </label>
        <label className="custom-label">
          Tasa de interes anual:
          <input
            type="number"
            disabled
            style={{ width: 50 + "%" }}
            className="text-center mx-auto my-2 form-control"
            value={annualInterestRate}
          />
        </label>
        <label className="custom-label">
          Costo Total:
          <input
            type="number"
            disabled
            style={{ width: 50 + "%" }}
            className="text-center mx-auto my-2 form-control"
            value={result}
          />
        </label>
        <input
          type="submit"
          className="btn btn-primary"
          onClick={(event) =>{
            event.preventDefault()
            confirmLoan(result);
          }}
          value="Pedir préstamo"
        />
      </form>
    </div>
  );
};

export default LoanMoney;
