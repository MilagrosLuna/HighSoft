import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Footer.css";
import logoImg from "../../assets/img/logoW.png"; // Asegúrate de importar la imagen correctamente

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function Footer({ data }) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const clearForm = () => setFormData(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.name, formData.email, formData.message);
    emailjs
      .sendForm(
        "service_highsoft",
        "template_lbtq95w",
        e.target,
        "c27M8Q4FXi0vsbfvL"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="container-footer">
      <ContactSection
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
        data={data}
      />
      <InfoSection />
    </div>
  );
}

function ContactSection({ handleSubmit, handleChange, formData, data }) {
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

function ContactInfo({ data }) {
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

function InfoSection() {
  return (
    <div id="footer">
      <div className="container text-center">
        <p>
          &copy; 2023 <b>HighSoft banking</b>. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
