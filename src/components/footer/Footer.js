import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Footer.css"; 
import ContactSection from "./ContactSection";
import InfoSection from "./InfoSection";
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
