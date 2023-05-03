import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

// Simula pagos para probar tu integración.
// 4242424242424242 --> valida
// 4000000000000002 --> rechazo generico
// 4000000000009995 -->> fondos insuficientes
// 4000000000000069 -->> tarjeta vencida

const stripePromise = loadStripe("pk_stripe");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        setLoading(true);
        const { id } = paymentMethod;
        const data = { id, amount: 100000 };

        const paymentAxios = await axios.post("http://localhost:3001/api/checkout", {
          data,
        });

        const paymentFetch = await fetch("http://localhost:3001/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        console.log({ paymentAxios });
        console.log(paymentFetch.data ? paymentFetch.data : paymentFetch);
      } catch (error) {
        console.error("error", error);
      } finally {
        setLoading(false);
      }
    }

    return (
      <form onSubmit={handleSubmit} className="card card-body">
        <img className="img-fluid" src="https://i.pinimg.com/736x/21/27/85/212785cbad567eeaf473a17bb2eb1d69.jpg" alt="imagen" />

        <h3 className="text-center my-2">Price: $100</h3>

        <div className="form-group">
          <CardElement className="form-control" />
        </div>
        <button className="btn btn-primary" disabled={stripe ? false : true}>
          {loading ? (
            <div className="spinner-border text-light" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            "Buy"
          )}
        </button>
      </form>
    );
  };
};

function App() {
  useEffect(() => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      console.log("DEVELOPMENT", process.env.NODE_ENV);
    } else {
      console.log("PRODUCTION", process.env.NODE_ENV);
    }
  }, []);

  return (
    <div className="App d-flex justify-content-center align-items-center" style={{ background: "gray", minHeight: "100vh" }}>
      <Elements stripe={stripePromise}>
        <div className="container p-4">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <CheckoutForm />
            </div>
          </div>
        </div>
      </Elements>
    </div>
  );
}

export default App;
