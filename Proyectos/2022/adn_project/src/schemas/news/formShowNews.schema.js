import { lenguageAppSchema } from "schemas/app.schema";

export const newsDataToFieldsInputSearch = {
  check: {
    textFilter: lenguageAppSchema("filterToText"),
    fieldsCheck: [
      {
        label: lenguageAppSchema("titleText"),
        name: "filter",
        type: "radio",
        value: "title",
        defaultChecked: true,
      },
      {
        label: lenguageAppSchema("authorText"),
        name: "filter",
        type: "radio",
        value: "author",
      },
    ],
  },
};
