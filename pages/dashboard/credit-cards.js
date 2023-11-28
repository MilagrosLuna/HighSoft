import React, { useState } from 'react';

// Componente de tarjeta de crédito
function CreditCard({ type, limit, showDetails }) {
  return (
    <div className="card">
      <h2>{type} Card</h2>
      <p>Limit: ${limit}</p>
      {showDetails && (
        <div className="card-details">
          {/* Agregar detalles adicionales aquí */}
        </div>
      )}
      <button className="btn" onClick={showDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      <button className="btn">Request Limit Increase</button>
      <button className="btn">View Statements</button>
    </div>
  );
}

function CreditCards() {
  const [showCardDetails, setShowCardDetails] = useState(false);

  return (
    <div className="credit-cards">
      <h1>Your Credit Cards</h1>
      <CreditCard type="Credit" limit={5000} showDetails={() => setShowCardDetails(!showCardDetails)} />
      <CreditCard type="Credit" limit={8000} showDetails={() => setShowCardDetails(!showCardDetails)} />
      <CreditCard type="Debit" limit={2000} showDetails={() => setShowCardDetails(!showCardDetails)} />
    </div>
  );
}

export default CreditCards;
