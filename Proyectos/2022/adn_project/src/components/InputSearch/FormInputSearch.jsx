import { Form } from "react-bootstrap";
import { CheckFilter } from "./CheckFilter";
import { InputSearch } from "./InputSearch";

export const FormInputSearch = ({
  disabledSearchButton,
  handleChange,
  handleSubmit,
  whithCheckInput = false,
  fieldsInputSearch,
}) => {
  return (
    <Form
      className="d-flex flex-wrap justify-content-evenly align-items-center w-100"
      onSubmit={handleSubmit}
    >
      {whithCheckInput && <CheckFilter fields={fieldsInputSearch} />}

      <InputSearch
        disabledSearchButton={disabledSearchButton}
        handleChange={handleChange}
      />
    </Form>
  );
};
