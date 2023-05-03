import { useState } from "react";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import styled from "styled-components";
import "./App.css";

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
  phone: {
    required: { message: "campo requerido" },
    length: { message: "Escribi un número de telefono válido por ej:..." },
  },
};

function App() {
  const [valueAutocomplete, setValueAutocomplete] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const {
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("SUBMIT", data);
  };

  const handleChange = async (event) => {
    setValueAutocomplete(event.target.value);

    try {
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?access_token=TOKEN=true`;

      const response = await fetch(endpoint);
      const results = await response.json();

      setSuggestions(results.features);
    } catch (error) {
      console.error("Error fetching data", error.message);
    }
  };

  const handleClickSuggestion = (suggestionSelected) => {
    console.log({ suggestionSelected });
    setValueAutocomplete(suggestionSelected);
    setSuggestions([]);
  };

  return (
    <div className="App d-flex justify-content-center align-items-center" style={{ background: "gray", minHeight: "100vh" }}>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">
        <Wrapper>
          <Input autoComplete="shipping address-line1" value={valueAutocomplete} onChange={handleChange} isTyping={valueAutocomplete !== ""} />
          {suggestions?.length > 0 && (
            <SuggestionWrapper>
              {suggestions.map((suggestion, idx) => (
                <Suggestion key={idx} onClick={() => handleClickSuggestion(suggestion.place_name)}>
                  {suggestion.place_name}
                </Suggestion>
              ))}
            </SuggestionWrapper>
          )}
        </Wrapper>

        <input className="my-3" type="submit" />
      </form>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Input = styled.input`
  background: white;
  position: absolute;
  width: 400px;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  position: relative;
  display: grid;
  justify-self: center;

  &:focus {
    outline: none;
    border-radius: ${(props) => props.isTyping && "10px 10px 0 0"};
  }
`;

const SuggestionWrapper = styled.div`
  margin: 0 auto;
  background: white;
  position: absolute;
  width: 400px;
  padding: 10px 20px;
  border-radius: 0 0 10px 10px;
`;

const Suggestion = styled.p`
  cursor: pointer;
  max-width: 400px;

  &:hover {
    background-color: aliceblue;
    color: red;
  }
`;
