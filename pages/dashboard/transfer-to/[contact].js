import React, { useEffect, useState } from "react";
import contactsData from "@/src/data/transferContacts.json";
import LayoutHome from "@/components/layoutHome";
import useMovement from "@/src/hooks/useMovement";

const TransferContact = (props) => {
  const { contact } = props;

  const { getType, getService, getAmount, handleSubmit } = useMovement();

  const getBeneficiaryDirectly = (beneficiary) => getService(beneficiary);

  useEffect(() => {
    getBeneficiaryDirectly(contact.name);
    getType("Transferencia");
  }, []);

  const confirmTransfer = (event) => {
    event.preventDefault();
    const confirmMessage = "¿Desea realizar la transferencia?";
    const confirm = window.confirm(confirmMessage);
    if (confirm) {
      alert("Su transferencia fue enviada");
      handleSubmit(event);
    } else {
      alert("La transferencia ha sido cancelada.");
    }
  };

  return (
    <LayoutHome>
      <div
        style={{ width: 60 + "%" }}
        className="container py-3 mx-auto my-20 text-white text-center bg-rosa rounded"
      >
        <h4 className="my-4">¿Deseas transferir a {contact.name} ?</h4>
        <div className="bg-light text-black text-left mx-auto my-4 p-4 rounded w-75">
          <h5 className="font-bold mb-4 text-center">
            Informarcion de la cuenta
          </h5>
          <p><b>Propietario/a:</b> {contact.name}</p>
          <p><b>CUIT:</b> {contact.cuit}</p>
          <p><b>Alias de la cuenta:</b> {contact.alias}</p>
          <p><b>Banco:</b> {contact.bank}</p>
        </div>
        <h4>¿Cuánto deseas transferir?</h4>
        <div className="container d-flex w-75 gap-3">
          <input
            onChange={getAmount}
            type="number"
            min={1}
            className="text-center mx-auto my-2 form-control"
          />
          <button onClick={confirmTransfer} className="my-3 btn btn-danger">
            Transferir
          </button>
        </div>
      </div>
    </LayoutHome>
  );
};

export default TransferContact;

export const getStaticPaths = () => {
  const paths = contactsData.map((contact) => {
    return { params: { contact: contact.alias } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const { params } = context;
  const alias = params.contact;

  const contactTarget = contactsData.find((contact) => contact.alias === alias);

  return {
    props: {
      contact: contactTarget,
    },
    revalidate: 10,
  };
};
