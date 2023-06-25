import "./App.css";
import { useForm } from "react-hook-form";
import { Button, Image, Modal } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Component1 } from "./components/RxJS/Component1";
import { Component2 } from "./components/RxJS/Component2";
import { Component1WithModal } from "./components/RxJSModal/Component1WithModal";
import { Componente2WithModal } from "./components/RxJSModal/Componente2WithModal";
import { Component1MsgAlert } from "./components/RxJsMsgAlert/Component1MsgAlert";
import { Component2MsgAlert } from "./components/RxJsMsgAlert/Componente2MsgAlert";

function MyVerticallyCenteredModal(props) {
  const [value, setValue] = useState(null);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Modal show={props.show} onHide={props.onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <input type="text" onChange={handleChange} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.savedata(value)}>Close</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

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
      console.log("no pasa validacion");
      setError("phone", {
        type: "length",
        message: validator.phone.length.message,
      });
    } else {
      console.log("pasa validacion");
      clearErrors("phone");
      setPhone(event);
    }
  };

  const [modalShow, setModalShow] = useState(false);

  const [saveData, setSaveData] = useState({});

  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [image, setImage] = useState("");

  const convertBase64 = (file) => {
    console.log({ file });
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result.toString());
    };

    reader.readAsDataURL(file);
  };

  const onSubmit = (data) => {
    console.log("SUBMITTTTTTTTTTT", data);
    console.log(data.picture[0]);

    if (data.picture.length > 0) {
      console.log("en true del if SUBMIT ");
      convertBase64(data.picture[0]);
    }
  };

  const handleSaveData = (value) => {
    setSaveData(value);
  };

  return (
    <div className="App d-flex flex-column justify-content-center align-items-center" style={{ background: "gray", minHeight: "100vh" }}>
      <Image src={image} alt="image" />
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">
        <input
          className="my-3"
          {...register("example", {
            required: true,
            message: "campo requerido",
          })}
        />

        <PhoneInput placeholder="Enter phone number" value={phone} onChange={handleChangePhone} />
        {errors.phone && <span>{errors["phone"]["message"]}</span>}

        <Button className="my-3" variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>

        <input className="my-3" type="file" {...register("picture", validator["picture"])} />
        {errors.picture && <span>{errors["picture"]["message"]}</span>}

        <input className="my-3" type="submit" />
      </form>

      <hr />
      <hr />

      <div>
        <Component1 />
        <Component2 />
      </div>

      <div>
        <Component1WithModal />
        <Componente2WithModal />
      </div>

      <div>
        <Component1MsgAlert />
        <Component2MsgAlert />
      </div>

      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} savedata={handleSaveData} />
    </div>
  );
}

export default App;
