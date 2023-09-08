import React from 'react'

const CurrencyExchange = () => {
  return (
    <div className="container py-3 mx-auto my-3 bg-secondary text-white text-center bg-rosa">
        <h4>Conversión de Moneda</h4>
        <form>
            <label>Monto:<input type="number"/></label>
            <label>Moneda de Origen:<select></select></label>
            <label>Moneda de Destino:<select></select></label>
            <button type='button'>Realizar Coversión</button>
        </form>
    </div>
  )
}

export default CurrencyExchange