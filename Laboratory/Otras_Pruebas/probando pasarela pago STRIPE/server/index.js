const express = require("express");
const Stripe = require("stripe");
const stripe = new Stripe(
  "sk_test_51Ldg9ZFIGY1TPncwAXCDHy5hud9Q5r4X4it5C9wczcNGMGNxFW01vXLRksz02oaKBTEwkwEDOgBmPmL1Kmy9UhL800A5in71Bq"
);

const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  console.log(req.body);
  // you can get more data to find in a database, and so on
  const { id, amount } = req.body.data ? req.body.data : req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Gaming Keyboard",
      payment_method: id,
      confirm: true, //confirm the payment at the same time
    });

    console.log(payment);

    return res.status(200).json({ message: "Successful Payment" });
  } catch (error) {
    console.log(error);
    return res.json({ message: error.raw.message });
  }
});

app.listen(3001, () => {
  console.log("Server on port", 3001);
});

// const express = require("express");
// const Stripe = require("stripe");
// const cors = require("cors");

// const app = express();

// const stripe = new Stripe(
//   "sk_test_51Ldg9ZFIGY1TPncwAXCDHy5hud9Q5r4X4it5C9wczcNGMGNxFW01vXLRksz02oaKBTEwkwEDOgBmPmL1Kmy9UhL800A5in71Bq"
// );

// app.use(cors({ origin: "http://localhost:3000" }));
// app.use(express.json());

// app.post("/api/checkout", async (req, res) => {
//   try {
//     const { id, amount } = req.body;

//     const payment = await stripe.paymentIntents.create({
//       amount,
//       currency: "USD",
//       description: "Tecladito",
//       payment_method: id,
//       confirm: true, // con ete confirm es que AVISAMOS que se confirmo el pago
//     });

//     console.log(payment);

//     res.send({ message: "Succesfull payment" });
//   } catch (error) {
//     console.log("error", error);
//     res.json({ message: error.raw.message });
//   }
// });

// app.listen(3001, () => {
//   console.log("server on port", 3001);
// });
