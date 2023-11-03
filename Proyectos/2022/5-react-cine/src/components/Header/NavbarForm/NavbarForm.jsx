import { FormInput } from "./FormInput";
import { FormFilterStar } from "./FormFilterStar";

import { Form } from "react-bootstrap";

export const NavbarForm = () => {
  return (
    <Form className="col-9 col-sm-7 col-lg-6 col-xl-5 d-flex">
      <FormFilterStar />
      <FormInput />
    </Form>
  );
};
