import React from "react";
import Modal from "@/components/Modal";
import useModal from "@/src/hooks/useModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/layout";

const PayServices = () => {
  const { isOpen, setIsOpen, toggleModal } = useModal();

  const clickHandler = (event) => {
    if (!event.target.classList.contains("paid")) {
      event.target.classList.add("paid");
      toggleModal();
    } else {
      toast.warning("Este servicio ya se pagó.", {
        position: "bottom-right",
        autoClose: 5000,
      });
    }
  };

  function notifyConfirm() {
    toast.success("Se pagó el servicio.", {
      position: "bottom-right",
      autoClose: 5000,
    });
  }
  function notifyCancel() {
    toast.error("Se canceló el pago.", {
      position: "bottom-right",
      autoClose: 5000,
    });
  }

  return (
    <Layout>
      <div
          style={{ width: 60 + "%" }}
          className="container py-3 mx-auto my-20 text-white text-center bg-rosa rounded"
      >
        <h3 className="text-white font-bold my-4">Elige que servicios quieres pagar</h3>
        <div className="my-4 mt- container">
          <button
            className={"btn btn-danger mx-2"}
            value={1000}
            onClick={(event) => {
              clickHandler(event);
            }}
          >
            Agua
          </button>
          <button
            className={"btn btn-danger mx-2"}
            value={300}
            onClick={(event) => {
              clickHandler(event);
            }}
          >
            Luz
          </button>
          <button
            className={"btn btn-danger mx-2"}
            value={700}
            onClick={(event) => {
              clickHandler(event);
            }}
          >
            Gas
          </button>
        </div>
        <Modal onClose={toggleModal} isOpen={isOpen} cerrar={toggleModal}>
          <p>¿Desea continuar con el pago del servicio?</p>
          <button onClick={notifyConfirm} className="btn-opcion">
            Enviar
          </button>
          <button onClick={notifyCancel} className="btn-opcion">
            Cancelar
          </button>
        </Modal>
        <ToastContainer />
      </div>
    </Layout>
  );
};

export default PayServices;
