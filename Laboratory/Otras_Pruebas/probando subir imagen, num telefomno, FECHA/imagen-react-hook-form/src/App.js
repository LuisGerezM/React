import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import "./App.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { enUS, es } from "date-fns/locale";
import { registerLocale } from "react-datepicker";
import { claculanding } from "./utilities/calculandoPróximoLunesODiaDeInteres";

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
  const [countDateInput, setCountDateInput] = useState(1);
  const [amountDateInput, setAmountDateInput] = useState([1]);
  const [dateEvent, setDateEvent] = useState([{ date: "", num: 1 }]);

  const [uniqueDateEvent, setUniqueDateEvent] = useState();

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

  const [searchnextDayAccordToSelection, setSearchNextDayAccordToSelection] = useState(3);

  const convertBase64 = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result.toString());
    };

    reader.readAsDataURL(file);
  };

  const onSubmit = (data) => {
    const nextDay = new Date(uniqueDateEvent).toLocaleString().split(",");
    console.log({ nextDay }); // ["23/11/2022", " 17:44:21"]
    console.log(nextDay[0]); // console.log(new Date(uniqueDateEvent).toLocaleString().split(',')[0])
  };

  const handleSaveData = (value) => {
    setSaveData(value);
  };

  const handlerDate = (e, numAmount) => {
    setDateEvent(dateEvent.map((item) => (item.num !== numAmount ? item : { date: e, num: numAmount })));
  };

  const languages = {
    es: { registerLocale: es, strLocale: "es" },
    en: { registerLocale: enUS, strLocale: "enUS" },
  };

  const lenguageNavigator = window.navigator.language.slice(0, 2);

  registerLocale(languages[lenguageNavigator].strLocale, languages[lenguageNavigator].registerLocale);

  const handleAddInputDate = () => {
    setCountDateInput(countDateInput + 1);
    setAmountDateInput(amountDateInput.concat([countDateInput + 1]));
    setDateEvent([...dateEvent, { date: "", num: countDateInput + 1 }]);
  };

  const handleDay = (value) => {
    setSearchNextDayAccordToSelection(value);
  };

  useEffect(() => {
    setUniqueDateEvent(claculanding(searchnextDayAccordToSelection));
  }, [searchnextDayAccordToSelection]);

  useEffect(() => {
    setUniqueDateEvent(new Date(1669236261208));
  }, []);

  return (
    <div className="App d-flex justify-content-center align-items-center" style={{ background: "gray", minHeight: "100vh" }}>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">
        <div>
          <div className="mx-3 btn btn-primary" onClick={() => handleDay(1)}>
            Lunes
          </div>
          <div className="mx-3 btn btn-primary" onClick={() => handleDay(2)}>
            Marts
          </div>
          <div className="mx-3 btn btn-primary" onClick={() => handleDay(3)}>
            Miercoles
          </div>
        </div>

        <div className="my-3" style={{ color: "white" }}>
          Siguiente dia (lunes, martes o miercoles) del seleccionado: {uniqueDateEvent}
        </div>

        {amountDateInput.map((item, index) => (
          <div key={index}>
            <DatePicker
              className="date-picker"
              name={`${countDateInput}-dateEvent`}
              selected={uniqueDateEvent}
              onChange={(date) => setUniqueDateEvent(date)}
              dateFormat={languages[lenguageNavigator].strLocale === "es" ? "dd-MMM-yyyy" : "MMM-dd-yyyy"}
              minDate={new Date()}
              locale={languages[lenguageNavigator].strLocale}
            />
          </div>
        ))}

        <button onClick={handleAddInputDate}>aggregar otra fecha</button>

        <input className="my-3" type="submit" />
      </form>

      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} savedata={handleSaveData} />
    </div>
  );
}

export default App;
