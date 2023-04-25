import "./App.css";
import { useForm } from "react-hook-form";
import { Button, Image, Modal } from "react-bootstrap";
import { useEffect, useState, useRef } from "react";
import "./styles.css";

const AutoComplete = ({ setValue, clearErrors }) => {
  const autoCompleteRef = useRef();
  const inputRef = useRef();

  const handleChangeValue = (event) => {
    if (!event.target.value) setValue("ubication", "");
  };

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current);

    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();

      setValue("ubication", place.formatted_address);
      clearErrors(["ubication"]);
    });
  }, []);

  return (
    <div>
      <label>enter address :</label>
      <input ref={inputRef} onChange={handleChangeValue} placeholder="Ingresa ubicación" />
    </div>
  );
};

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
  ubication: {
    required: { value: true, message: "campo requerido" },
  },
};

function App() {
  const [modalShow, setModalShow] = useState(false);

  const [saveData, setSaveData] = useState({});

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    clearErrors,
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

  const handleSaveData = (value) => {
    setSaveData(value);
  };

  return (
    <div className="App d-flex justify-content-center align-items-center" style={{ background: "gray", minHeight: "100vh" }}>
      <Image src={image} alt="image" />
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">
        <input
          className="my-3"
          {...register("example", {
            required: true,
            message: "campo requerido",
          })}
        />
        <Button className="my-3" variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
        <input className="my-3" type="file" {...register("picture", validator["picture"])} />
        {errors.picture && <span>{errors["picture"]["message"]}</span>}
        <div>
          <AutoComplete setValue={setValue} clearErrors={clearErrors} />
          <input type="text" {...register("ubication", validator["ubication"])} />
          {errors.ubication && <span>{errors["ubication"]["message"]}</span>}
        </div>
        <hr />
        SCROLL:
        <div className="contenedor">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget nisi erat. Morbi vel lacus rutrum, imperdiet ligula a, faucibus justo.
          </p>
          <p>
            Sed <a href="https://www.campusmvp.es">eu risus ultricies</a>, mattis lacus vitae, tristique mauris. Pellentesque rutrum est at est tempor
            accumsan.
          </p>
          <p>Mauris vulputate ultrices volutpat. Fusce tincidunt arcu vel orci laoreet, a convallis urna tristique.</p>
          <p>
            Mauris sit amet nisi a augue malesuada semper. Vivamus nec volutpat turpis. Suspendisse est velit, blandit et dui nec, posuere dapibus
            mauris.
          </p>
          <p>
            Pellentesque suscipit arcu in lorem ullamcorper hendrerit. Ut vel diam ornare, consectetur libero vitae, hendrerit elit. Cras eu orci
            porta odio facilisis bibendum a vel felis.
          </p>
        </div>
        <input className="my-3" type="submit" />
      </form>

      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} savedata={handleSaveData} />
    </div>
  );
}

export default App;
