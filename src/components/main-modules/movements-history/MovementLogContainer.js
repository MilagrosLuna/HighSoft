import React from "react";

const MovementLogContainer = ({ children }) => {
  return <table class="text-black table table-responsive table-striped bg-rosa-secondary rounded">{children}
        <thead className="bg-rosa-secondary rounded">
            <tr className="thead-danger">
                <th>Fecha</th>
                <th>Tipo</th>
                <th>Destino</th>
                <th>Monto</th>
            </tr>
        </thead>
  </table>;
};

export default MovementLogContainer;
