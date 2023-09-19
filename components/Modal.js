import React from "react";
import Overlay from "./Overlay";


const Modal = (props) => {
  if (!props.isOpen) return null;

  return (
    <div>
      <Overlay onClick={props.cerrar}>
        <div className="modal-container">
          <div className="modal-encabezado">
            <h3>Este es mi Modal</h3>
            <span onClick={props.cerrar}>X</span>
          </div>
          <div className="modal-contenido">{props.children}</div>
        </div>
      </Overlay>
    </div>
  );
};

export default Modal;
