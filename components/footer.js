import Link from "next/link";
import PropTypes from "prop-types";
import Container from "./container";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import MessageForm from "./messageForm";

export default function Footer() {
  return (
    <div className="bg-black text-white border-b border-theme-light-blue text-sm p-8 mx-auto my-auto">
      <Container>
        <div className="flex flex-col md:flex-row w-full xl:mx-8">
          <div className="w-full md:w-1/3 mx-auto my-auto">
            <h3 className="text-lato text-2xl font-light mb-4">Información</h3>
            <a href="tel:+447891760244" className="flex items-center mb-2">
              <FaPhoneAlt />
              <p className="ml-2">Phone: 07891760244</p>
            </a>
            <div className="w-full flex items-start">
              <div className="flex items-center">
                <FaCompass />
                <p className="ml-2">Address: </p>
              </div>
              <div className="ml-1 w-1/2">
                <p>Brynhyfryd, Vicarage Road, Potten End, Herts, HP4 2QZ.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 mt-6 md:mt-0 mx-auto my-auto">
            <MessageForm />
          </div>
        </div>
      </Container>
      <div className="container text-center">
        <p>
          &copy; 2023 <b>HighSoft banking</b>. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
