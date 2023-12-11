import React, { useState, useEffect, useContext } from "react";
import styles from "../../styles/accounts.module.css"
import Modal from "@/components/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLoan from "@/src/hooks/useLoan";
import useModal from "@/src/hooks/useModal";
import LayoutHome from "@/components/layoutHome";
import Head from "next/head";
import GeneralContext from "@/src/context/generalContext";

const PrestamosEmpleado = () => {
  const { isOpen, setIsOpen, toggleModal } = useModal();
  const context = useContext(GeneralContext)

  const [loansData, setLoansData] = useState()
  const [requestedBranch, setRequestedBranch] = useState()

  // estado para almacenar los datos del cliente como objeto
  const [clientData, setClientdata] = useState()

  // traer los datos del cliente y almacenarlos en el estado
  useEffect(() => {
    context.getClientData(setClientdata)
  }, [])

  const handleBranch = (event) => {
    setRequestedBranch(event.target.value);
  };

  const handleSubmit = () => {
    event.preventDefault();
    if (clientData && requestedBranch){
        context.getLoansByBranch(setLoansData, clientData.auth_header, requestedBranch)
    }
  };

  return (
    <>
      <Head>
        <title>HighSoft</title>
        <meta name="description" content="Inicio" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="HighSoft" />
        <meta
          name="keywords"
          content="HighSoft, Online Banking, Banco, Homebanking, Préstamos personales, Pagos en línea, Transferencias"
        />
        <meta http-equiv="Content-Language" content="es" />
      </Head>
      <LayoutHome>
        <div
          style={{ width: 60 + "%" }}
          className="container py-3 mx-auto my-20 text-white text-center bg-rosa rounded"
        >
          <h3 className="text-white font-bold my-4">Listar Prestamos por sucursal</h3>
          <form className="container">
            <label className="custom-label">
              Sucursal a consultar:
              <input
                onChange={handleBranch}
                required
                type="number"
                min={0}
                style={{ width: 50 + "%" }}
                className="text-center mx-auto my-2 form-control"
              />
            </label>
            <input
              type="submit"
              className="btn btn-danger d-block mx-auto my-4"
              onClick={handleSubmit}
              value="Consultar prestamos"
            />
          </form>
        </div>
        {loansData && console.log(loansData)}
        {loansData && 
            <div className="container text-center">
                {loansData.map((loan, index) => (
                    <div key={index} className={styles.accountWrap}>
                    <strong>ID de préstamo: {loan.loan_id}</strong>
                    <p>ID de cliente: {loan.customer_id}</p>
                    <p>Fecha del préstamo: {loan.loan_date}</p>
                    <p>Tipo de préstamo: {loan.loan_type}</p>
                    <p>Monto del préstamo: <strong>${(loan.loan_total / 100).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></p>
                    </div>
                ))}
            </div>
        }
      </LayoutHome>
    </>
  );
};

export default PrestamosEmpleado;
