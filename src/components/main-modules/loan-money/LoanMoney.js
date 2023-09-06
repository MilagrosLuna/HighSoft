import React from 'react'

const LoanMoney = () => {
  return (
    <div>
       <h4>Solicitar Préstamo</h4> 
       <form>
        <label>Monto a solicitar:<input type="number" /></label>
        <label>Elija un plazo de pago:<input type="text" /></label>
        <label>Tasa de interes:<input type="number" disabled/></label>
        <label>Costo Total<input type="number" disabled/></label>
        <button type='button'>Pedir</button>
       </form>
    </div>
  )
}

export default LoanMoney