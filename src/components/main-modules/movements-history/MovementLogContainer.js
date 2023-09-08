import React from "react";

const MovementLogContainer = ({ children }) => {
  return <table class="table table-responsive table-striped">{children}
        <thead>
            <tr>
                <th>Fecha</th>
                <th>Tipo</th>
                <th>Destino</th>
                <th>Monto</th>
            </tr>
        </thead>
  </table>;
};

export default MovementLogContainer;
