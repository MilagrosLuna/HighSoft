import React, { useState } from "react"

const HomePage = () => {

  const [balance, setBalance] = useState(10000)
  const [showBalance, setShowBalance] = useState(false);

  const handleShowBalance =()=>{
    (showBalance)?setShowBalance(false):setShowBalance(true);
  }

  return (
      <div>
        <div class="section-wrap-show" id="incioWrap">
          <h1>Bienvenido a tu cuenta</h1>
          <h2 class="section-title">Saldo disponible</h2>
          <div class="saldo-wrap">
            {(showBalance)?balance:"***"}
            <button id="saldoButton" onClick={handleShowBalance}>Mostrar Saldo</button>
          </div>
        </div>
      </div>
    ) 
}

export default HomePage