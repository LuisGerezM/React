import "./App.css";
import { useForm } from "react-hook-form";
import { useEffect, useRef } from "react";
import "react-phone-number-input/style.css";

import emailjs from "@emailjs/browser";

const nameServer = "";
const server_key = "";
export const patterns = {
  patternPassword: /^(?=.*[A-Za-z])(?=.*\d)+/g,
  patternEmail: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
  patternURL: /[(http(s?)]+:\/\/[(www.)?a-zA-Z0-9@:%._+~#=-]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=-]*)/i,
  patternHTTPS: /^(http|https):\/\//,
  patternNumber: /^[0-9][0-9]*$/,
};

const msgValidation = {
  required: "El campo es requerido",
  match: {
    password: "Las contraseñas deben coincidir",
  },
  email: {
    pattern: "Ingresa un email válido",
  },
};

const validator = {
  email: {
    required: msgValidation.required,
    pattern: {
      value: patterns.patternEmail,
      message: msgValidation.email.pattern,
    },
  },
  name: {
    required: msgValidation.required,
  },
  message: {
    required: msgValidation.required,
  },
};

const inputs = [
  {
    type: "text",
    name: "surNameAndName",
    placeholder: "Apellido y Nombre",
  },
  {
    type: "text",
    name: "sectionColab",
    placeholder: "Seccción a colaborar",
  },
  {
    type: "text",
    name: "ubication",
    placeholder: "Ubicación",
  },
  {
    type: "text",
    name: "phone",
    placeholder: "Teléfono",
  },
  {
    type: "text",
    name: "message",
    placeholder: "Mensaje",
  },
  {
    type: "text",
    name: "email",
    placeholder: "Email",
  },
];

function App() {
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const message = `Hola, mi nombre es: ${data.surNameAndName}, soy de ${data.ubication}, mi teléfono es: ${data.phone} y me gustaría trabajar con ud específicamente en: ${data.sectionColab}.`;

    const formSend = {
      from_name: "Cuati",
      name: "Luis",
      email: data.email,
      to_name: "Admin",
      message,
      users: "luis.gerez@gmail.com",
    };

    console.log(formSend);

    emailjs.send(nameServer, "template_9qgsb3p", formSend, server_key).then(
      (result) => {
        console.log({ result });
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="App d-flex justify-content-center align-items-center" style={{ background: "gray", minHeight: "100vh" }}>
      <form ref={form} onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">
        {inputs.map((item) => (
          <div key={item.name}>
            <input type={item.type} className="my-3" placeholder={item.placeholder} {...register(item.name, validator[item.name])} />
            {errors[item.name] && <span>{errors[item.name].message}</span>}
          </div>
        ))}

        <input className="my-3" type="submit" />
      </form>
    </div>
  );
}

export default App;
