const { lenguageAppSchema } = require("../app.schema");

const actionsInNews = [
  {
    name: lenguageAppSchema("seeNews"),
    value: "news",
  },
  {
    name: lenguageAppSchema("newNews"),
    value: "newNews",
  },
];

export { actionsInNews };
