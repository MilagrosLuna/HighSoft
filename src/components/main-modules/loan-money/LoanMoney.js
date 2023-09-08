import { Button } from "@material-ui/core";
import React, { useContext, useEffect } from "react";

const LoanMoney = () => {
  return (
    <div style={{width:60+"%"}}  className="container py-3 mx-auto my-3 text-white text-center bg-rosa rounded">
      <h3 className="text-white">Solicitar Préstamo</h3>
      <form>
        <label className="custom-label">
          Monto a solicitar:
          <input required type="number" style={{ width: 50 + "%" }}
          className="text-center mx-auto my-2 form-control" />
        </label>
        <label className="custom-label">
          Elija un plazo de pago:
          <select style={{ width: 50 + "%" }}
          className="text-center mx-auto my-2 form-control">
            <option value="12">
              12 cuotas
            </option>
            <option value="24">
              24 cuotas
            </option>
            <option value="36">
              36 cuotas
            </option>
          </select>
        </label>
        <label className="custom-label">
          Tasa de interes:
          <input type="number" disabled style={{ width: 50 + "%" }}
          className="text-center mx-auto my-2 form-control" />
        </label>
        <label className="custom-label">
          Costo Total:
          <input type="number" disabled style={{ width: 50 + "%" }}
          className="text-center mx-auto my-2 form-control" />
        </label>
        <input type="submit" className="btn btn-primary" onClick={(event)=>event.preventDefault()} value="Pedir préstamo" />
      </form>
    </div>
  );
};

export default LoanMoney;
