import React from 'react'

const Transfers = () => {
  return (
    <div>
        <form>
            <label htmlFor="">Ingresa un alias
                <input type="text" />
            </label>
            <label htmlFor="">Ingresa el monto que deseas tranferir
                <input type="text" />
            </label>
            <button type='button'>Transferir</button>
        </form>
    </div>
  )
}

export default Transfers