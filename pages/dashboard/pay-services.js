import React, { useContext, useEffect, useState } from "react";
import Modal from "@/components/Modal";
import useModal from "@/src/hooks/useModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/layout";
import { invoicesArray } from "@/src/data/services";
import GeneralContext from "@/src/context/generalContext";


const PayServices = () => {
  const balance = useContext(GeneralContext)
  const { isOpen, setIsOpen, toggleModal } = useModal();
  const [servicesToPay, setServicesToPay] = useState([])

  useEffect(()=>{
    setServicesToPay(invoicesArray)
  },[])

  const clickHandler = (event, index) => {
    const amount = event.target.value;
    console.log(amount);
    if (!event.target.classList.contains("paid")) {
      balance.decrement(amount);
      delete servicesToPay[index];
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
        <button onClick={()=>{console.log(servicesToPay);}}>probar</button>
        <h3 className="text-white font-bold my-4">Elige que servicios quieres pagar</h3>
        <div>
          <table style={{ width: 90 + "%" }} className="table table-bordered text-left mx-auto">
            <thead className="">
              <tr>
                <th>Servicio</th>
                <th>Monto</th>
                <th>Venc</th>
                <th></th>
              </tr>
            </thead>
            {servicesToPay.map((service, index)=>(
              <tr>
                <td>
                  {service.tipo_servicio}
                </td>
                <td>
                  ${service.monto}
                </td>
                <td>
                  {service.vencimiento}
                </td>
                <td>
                  <button onClick={(event)=>clickHandler(event, index)} value={service.monto} className="btn btn-success">Pagar</button>
                </td>
              </tr>
            ))}
          </table>
        </div>
        <Modal onClose={toggleModal} isOpen={isOpen} cerrar={toggleModal}>
          <p>¿Desea continuar con el pago del servicio?</p>
          <button onClick={notifyConfirm} className="btn-opcion btn btn-success">
            Enviar
          </button>
          <button onClick={notifyCancel} className="btn-opcion btn btn-danger">
            Cancelar
          </button>
        </Modal>
        <ToastContainer />
      </div>
    </Layout>
  );
};

export default PayServices;
