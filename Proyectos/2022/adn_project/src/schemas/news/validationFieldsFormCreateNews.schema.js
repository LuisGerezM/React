const msgValidation = {
  required: "El campo es requerido",
};

const validationFieldsFormCreateNews = {
  title: {
    required: { value: true, message: msgValidation.required },
  },
  author: {
    required: { value: true, message: msgValidation.required },
  },
  newsBody: {
    required: { value: true, message: msgValidation.required },
  },
};

export { validationFieldsFormCreateNews };
