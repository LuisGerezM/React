import { lenguageAppSchema } from "schemas/app.schema";

const fieldFormCreateNews = [
  {
    name: "title",
    label: lenguageAppSchema("titleText"),
    placeholder: lenguageAppSchema("addArticleAuthor"),
  },
  {
    name: "author",
    label: lenguageAppSchema("authorText"),
    placeholder: lenguageAppSchema("addArticleTitle"),
  },
  {
    name: "newsBody",
    as: "textarea",
    label: lenguageAppSchema("newsToShare"),
    placeholder: lenguageAppSchema("addArticleBody"),
  },
];

export { fieldFormCreateNews };
