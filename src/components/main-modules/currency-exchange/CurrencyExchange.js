import React from 'react'

const CurrencyExchange = () => {
  return (
    <div style={{width:60+"%"}}  className="container py-3 mx-auto my-3 text-white text-center bg-rosa rounded">
        <h3 className='text-white'>Conversión de Moneda</h3>
        <form>
            <label className='custom-label'>Monto:<input type="number" style={{ width: 50 + "%" }}
          className="text-center mx-auto my-2 form-control"/></label>
            <label className='custom-label'>Moneda de Origen:<select style={{ width: 40 + "%" }}
          className="text-center mx-auto my-2 form-control">
                <option value="USD">USD</option>
                <option value="ARS">ARS</option>
              </select></label>
            <label className='custom-label'>Moneda de Destino:<select style={{ width: 40 + "%" }}
          className="text-center mx-auto my-2 form-control">
                <option  value="USD">USD</option>
                <option value="ARS">ARS</option>
              </select></label>
            <input type="submit" className="mt-3 btn btn-primary" onClick={(event)=>event.preventDefault()} value="Convertir" />
        </form>
    </div>
  )
}

export default CurrencyExchange