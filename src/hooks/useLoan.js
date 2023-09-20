import React, { useState } from 'react'

const useLoan = () => {

    const [requestedAmount, setRequestedAmout] = useState(0);
    const [paymentDeadline, setPaymentDeadline] = useState(0);
    const [result, setResult] = useState(0);

    const annualInterestRate = 1.7199;

    const handleInput = (setter, event) => {
        setter(event.target.value);
      };

  return (
    {requestedAmount,
    paymentDeadline,
    result,
    annualInterestRate,
    setRequestedAmout,
    setPaymentDeadline,
    setResult,
    handleInput}
  )
}

export default useLoan