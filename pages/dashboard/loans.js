import React, { useState, useEffect } from "react";
import Modal from "@/components/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getFinalAmount } from "@/src/utils/loanMoneyUtils";
import useLoan from "@/src/hooks/useLoan";
import useModal from "@/src/hooks/useModal";
import LayoutHome from "@/components/layoutHome";
import useBalance from "@/src/hooks/useBalance";

const Prestamos = () => {
  const {
    requestedAmount,
    paymentDeadline,
    result,
    annualInterestRate,
    setRequestedAmout,
    setPaymentDeadline,
    setResult,
    handleInput,
  } = useLoan();
  const { isOpen, setIsOpen, toggleModal } = useModal();

  useEffect(() => {
    getFinalAmount(
      requestedAmount,
      paymentDeadline,
      annualInterestRate,
      setResult
    );
  }, [requestedAmount, paymentDeadline]);

  function notifySubmit() {
    toast.success("Su solicitud fue enviada", {
      position: "bottom-right",
      autoClose: 5000,
    });
  }
  function notifyCancel() {
    toast.error("Se canceló la solicitud", {
      position: "bottom-right",
      autoClose: 5000,
    });
  }

  return (
    <>
      <LayoutHome>
        <div
          style={{ width: 60 + "%" }}
          className="container py-3 mx-auto my-20 text-white text-center bg-rosa rounded"
          >
          <h3 className="text-white font-bold my-4">Solicitar Préstamo</h3>
          <form className="container">
            <label className="custom-label">
              Monto a solicitar:
              <input
                onChange={(event) => {
                  handleInput(setRequestedAmout, event);
                }}
                required
                type="number"
                min={0}
                style={{ width: 50 + "%" }}
                className="text-center mx-auto my-2 form-control"
              />
            </label>
            <label className="custom-label">
              Elija un plazo de pago:
              <select
                required
                onChange={(event) => handleInput(setPaymentDeadline, event)}
                style={{ width: 50 + "%" }}
                className="text-center mx-auto my-2 form-control"
              >
                <option value="">Seleccionar una opción &#8681;</option>
                <option value="12">12 cuotas</option>
                <option value="24">24 cuotas</option>
                <option value="36">36 cuotas</option>
              </select>
            </label>
            <label className="custom-label">
              Tasa de interes anual:
              <input
                type="number"
                disabled
                style={{ width: 50 + "%" }}
                className="text-center mx-auto my-2 form-control"
                value={annualInterestRate}
              />
            </label>
            <label className="custom-label">
              Costo Total:
              <input
                type="number"
                disabled
                style={{ width: 50 + "%" }}
                className="text-center mx-auto my-2 form-control"
                value={result}
              />
            </label>
            <input
              type="submit"
              className="btn btn-danger d-block mx-auto my-4"
              onClick={(event) => {
                if (paymentDeadline != 0 && requestedAmount != 0) {
                  event.preventDefault();
                  toggleModal();
                }
              }}
              value="Pedir préstamo"
            />
          </form>
        </div>
        <Modal onClose={toggleModal} isOpen={isOpen} cerrar={toggleModal}>
          <p>
            ¿Deseas enviar la solicitud de prestamo con un costo de{" "}
            <strong>${result}</strong>?
          </p>
          <button onClick={notifySubmit} className="btn-opcion">
            Enviar
          </button>
          <button onClick={notifyCancel} className="btn-opcion">
            Cancelar
          </button>
        </Modal>
        <ToastContainer />
      </LayoutHome>
    </>
  );
};

export default Prestamos;
