import React from "react";
import ContactInfo from "./ContactInfo";

import logoImg from "../../assets/img/logoW.png";

export default function ContactSection({
  handleSubmit,
  handleChange,
  formData,
  data,
}) {
  return (
    <>
      <div className="logo-container  text-center">
        <img src={logoImg} alt="Logo de HighSoft" className="logo" />
      </div>
      <div id="contact" className="center-content">
        <div className="container center-content">
          <div className="col-md-6">
            <div className="section-title text-center">
              <h2>Contacto</h2>
              <p>
                Por favor, completa el formulario a continuación para enviarnos
                un correo electrónico y te responderemos lo antes posible.
              </p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    required
                    onChange={handleChange}
                    value={formData.name}
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Correo Electrónico"
                    required
                    onChange={handleChange}
                    value={formData.email}
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows="4"
                placeholder="Mensaje"
                required
                onChange={handleChange}
                value={formData.message}
              ></textarea>
              <p className="help-block text-danger"></p>
            </div>
            <div id="success"></div>
            <button type="submit" className="btn btn-primary">
              Enviar Mensaje
            </button>
          </div>
          <div>
            <ContactInfo data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
