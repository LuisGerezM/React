import { useState } from "react";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import "./App.css";
import { FileInput } from "./components/FileInput";

const msgValidation = {
  required: "El campo es requerido",
  match: {
    password: "Las contraseñas deben coincidir",
  },
  email: {
    pattern: "Ingresa un email válido",
  },
  passwordField: {
    pattern: "Debe contener al menos una letra y un número",
    numberOfCharacters: "Debe contener entre 6 y 20 caracteres",
  },
  picture: {
    invalidSize: "The image cannot exceed 2MB",
    invalidType: "Format image permited png/jpg/jpeg",
  },
};

const validator = {
  picture: {
    required: { value: true, message: "campo requerido" },
    validate: (picture) => {
      if (!picture || !picture[0]) return msgValidation.required;

      const typeImg = picture[0].type.split("/");

      if (picture[0].size > 2000000) return msgValidation.picture.invalidSize;

      if (typeImg[1] !== "png" && typeImg[1] !== "jpg" && typeImg[1] !== "jpeg") return msgValidation.picture.invalidType;
    },
  },
  phone: {
    required: { message: "campo requerido" },
    length: { message: "Escribi un número de telefono válido por ej:..." },
  },
};

function App() {
  const [phone, setPhone] = useState();

  const handleChangePhone = (event) => {
    if (!event)
      return setError("phone", {
        type: "required",
        message: validator.phone.required.message,
      });

    if (event.length < 12 || event.length > 15) {
      setError("phone", {
        type: "length",
        message: validator.phone.length.message,
      });
    } else {
      clearErrors("phone");
      setPhone(event);
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    unregister,
    setValue,
    formState: { errors },
  } = useForm();

  const [image, setImage] = useState("");

  const convertBase64 = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result.toString());
    };

    reader.readAsDataURL(file);
  };

  const onSubmit = (data) => {
    if (data.picture.length > 0) {
      convertBase64(data.picture[0]);
    }
  };

  return (
    <div className="App d-flex justify-content-center align-items-center" style={{ background: "gray", minHeight: "100vh" }}>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">
        <FileInput />
        <input className="my-3" type="submit" />
      </form>
    </div>
  );
}

export default App;
