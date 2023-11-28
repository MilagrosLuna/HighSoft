import { useState, useReducer } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

// KEYS
// NEXT_PUBLIC_EMAIL_JS_SERVICE=service_highsoft 
// NEXT_PUBLIC_EMAIL_JS_TEMPLATE=template_lbtq95w
// NEXT_PUBLIC_EMAIL_JS_USER=c27M8Q4FXi0vsbfvL
// NEXT_PUBLIC_CAPTCHA_SITE_KEY=6LfF3R8pAAAAAPjNyQj2cPzZhje6YsVpBcNQwKRT

const initialState = {
  name: '',
  email: '',
  message: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.value };
    case 'email':
      return { ...state, email: action.value };
    case 'message':
      return { ...state, message: action.value };
    default:
      throw new Error();
  }
}

export default function MessageForm() {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [showFormErr, setShowFormErr] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState({ title: '', paragraph: '' });
  const [showCaptcha, setShowCaptcha] = useState(false);
  const { name, email, message } = formState;

  const submitFormAndShowCaptcha = (e) => {
    e.preventDefault();
    setShowCaptcha(true);
  };

  const sendEmail = (captchaValue) => {
    if (name === '' || email === '' || message === '') {
      setShowFormErr(true);
      return;
    }

    const params = {
      ...formState,
      'g-recaptcha-response': captchaValue,
    };

    setFormSubmitted({ title: 'Enviando mensaje...', paragraph: '' });
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE,
      process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE,
      params,
      process.env.NEXT_PUBLIC_EMAIL_JS_USER,
    )
      .then(({ status }) => {
        if (status === 200) {
          setFormSubmitted({ title: 'Mensaje enviado', paragraph: 'Nos pondremos en contacto pronto.' });
        } else {
          setFormSubmitted({ title: 'Código de estado inesperado recibido de EmailJS, inténtalo de nuevo más tarde', paragraph: 'Porfavor comuniquese por telefono.' });
        }
      }, (err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        setFormSubmitted({ title: 'Error al enviar el mensaje, inténtalo de nuevo más tarde', paragraph: 'Porfavor comuniquese por telefono.' });
      });
  };

  return formSubmitted.title === '' ? (
    <div className="bg-black text-white p-6 rounded">
      <h3 className="text-lato text-2xl font-light mb-4">CONTACTO</h3>
      {!showCaptcha ? (
        <form onSubmit={submitFormAndShowCaptcha} className="max-w-lg">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:mr-4 w-full sm:w-1/2 md:w-2/5 flex flex-col items-end">
              <label className="block text-gray-500 font-bold my-2 w-full" htmlFor="contact-form-name">
                Nombre:
                <input
                  id="contact-form-name"
                  className="appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green"
                  type="text"
                  value={name}
                  onChange={(e) => dispatch({ type: 'name', value: e.target.value })}
                  required
                />
              </label>
              <label className="block text-gray-500 font-bold my-2 w-full" htmlFor="contact-form-email">
                Email:
                <input
                  id="contact-form-email"
                  className="appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green"
                  type="email"
                  value={email}
                  onChange={(e) => dispatch({ type: 'email', value: e.target.value })}
                  required
                />
              </label>
            </div>
            <div className="sm:mx-4 w-full sm:w-1/2 md:w-3/5">
              <label className="block text-gray-500 font-bold my-2" htmlFor="contact-form-message">
                Mensaje:
                <textarea
                  rows="5"
                  id="contact-form-message"
                  className="appearance-none border-2 border-gray-200 rounded w-full p-2 text-gray-700 leading-tight focus:outline-none focus:border-theme-green"
                  type="text"
                  value={message}
                  onChange={(e) => dispatch({ type: 'message', value: e.target.value })}
                  required
                />
              </label>
            </div>
          </div>
          <div className="w-full flex justify-end items-center flex-col sm:flex-row">
            {showFormErr ? <p className="sm:mr-4 text-red-400 mb-4">Por favor, completa el formulario a continuación para enviarnos un correo electrónico y te responderemos lo antes posible.</p> : null}
            <button className="bg-theme-green text-white py-2 px-4 mt-6 sm:mr-4 rounded focus:outline-none focus:shadow-outline w-full md:w-1/4 lg:w-1/5" type="submit">
              Enviar
            </button>
          </div>
        </form>
      ) : (
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
          onChange={sendEmail}
          className="mt-6"
        />
      )}
    </div>
  ) : (
    <div className="flex flex-col items-center">
      <h3 className="text-lato text-2xl font-light text-white">{formSubmitted.title}</h3>
      <p>{formSubmitted.paragraph}</p>
    </div>
  );
}
