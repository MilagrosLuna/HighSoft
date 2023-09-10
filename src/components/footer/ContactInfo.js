import React from "react";

export default function ContactInfo({ data }) {
  return (
    <div className="col-md-6 contact-info">
      <div className="contact-item">
        <h3 className="text-center">Información de Contacto</h3>
        <p>
          <span>
            <i className="fa fa-map-marker"></i> Dirección
          </span>{" "}
          {data ? data.address : "Cargando dirección..."}
        </p>
      </div>
      <div className="contact-item">
        <p>
          <span>
            <i className="fa fa-phone"></i> Teléfono
          </span>{" "}
          {data ? data.phone : "Cargando teléfono..."}
        </p>
      </div>
      <div className="contact-item">
        <p>
          <span>
            <i className="fa fa-envelope-o"></i> Correo Electrónico
          </span>{" "}
          {data ? data.email : "Cargando correo electrónico..."}
        </p>
      </div>
    </div>
  );
}
