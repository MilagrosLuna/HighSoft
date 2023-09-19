import Modal from "@/components/Modal";
import Layout from "@/components/layout";
import React, { useEffect, useState } from "react";
import { getCurrencyValues, getChangeValue } from "@/src/utils/currencyUtils";

const Convertidor = () => {
  const [amountToChange, setAmountToChange] = useState(null);
  const [currencyData, setCurrencyData] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState("ARS");
  const [destinyCurrency, setDestinyCurrency] = useState(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    getCurrencyValues(selectedCurrency, setCurrencyData);
  }, []);
  useEffect(() => {
    getCurrencyValues(selectedCurrency, setCurrencyData);
  }, [selectedCurrency]);

  const handleInput = (setter, event) => {
    setter(event.target.value);
  };

  return (
    <Layout>
      <div
        style={{ width: 60 + "%" }}
        className="container py-3 mx-auto my-20 text-white text-center bg-rosa rounded"
      >
        <h3 className="text-white font-bold my-4">Conversión de Moneda</h3>
        <form>
          <label className="custom-label">
            Monto:
            <input
              onChange={(event) => {
                handleInput(setAmountToChange, event);
              }}
              type="number"
              style={{ width: 50 + "%" }}
              className="text-center mx-auto my-2 form-control"
            />
          </label>
          <label className="custom-label">
            Moneda de Origen:
            <select
              defaultValue={""}
              onChange={(event) => {
                handleInput(setSelectedCurrency, event);
              }}
              style={{ width: 100 + "%" }}
              className="text-center mx-auto my-2 form-control"
            >
              <option value="ARS">(ARS) Peso Argentino</option>
              <option value="USD">(USD) Dólar Estadounidense</option>
              <option value="CNY">(CNY) Yuan Chino</option>
              <option value="RUB">(RUB) Rublo Ruso</option>
              <option value="BRL">(BRL) Real Brasileño</option>
              <option value="GBP">(GBP) Libra Esterlina</option>
              <option value="CLP">(CLP) Peso Chileno</option>
              <option value="JPY">(JPY) Yen Japónes</option>
            </select>
          </label>
          <label className="custom-label">
            Moneda de Destino:
            <select
              defaultValue={""}
              onChange={(event) => {
                handleInput(setDestinyCurrency, event);
              }}
              style={{ width: 100 + "%" }}
              className="text-center mx-auto my-2 form-control"
            >
              <option value="undefined">Seleccionar una opción &#8681;</option>
              <option value="ARS">(ARS) Peso Argentino</option>
              <option value="USD">(USD) Dólar Estadounidense</option>
              <option value="CNY">(CNY) Yuan Chino</option>
              <option value="RUB">(RUB) Rublo Ruso</option>
              <option value="BRL">(BRL) Real Brasileño</option>
              <option value="GBP">(GBP) Libra Esterlina</option>
              <option value="CLP">(CLP) Peso Chileno</option>
              <option value="JPY">(JPY) Yen Japónes</option>
            </select>
          </label>
          <input
            type="submit"
            className="mt-3 btn btn-primary d-block mx-auto"
            onClick={(event) => {
              event.preventDefault();
              getChangeValue(
                currencyData,
                amountToChange,
                selectedCurrency,
                destinyCurrency,
                setResult
              );
            }}
            value="Convertir"
          />
        </form>
        {result != "error" ? (
          <label className="custom-label mt-4">
            El valor del cambio es:
            <input
              type="text"
              style={{ width: 50 + "%" }}
              className="text-center mx-auto my-2 form-control"
              disabled
              value={result}
            />
          </label>
        ) : (
          <h4>Error: moneda no admitida o tasa de cambio no disponible</h4>
        )}
      </div>
    </Layout>
  );
};

export default Convertidor;
