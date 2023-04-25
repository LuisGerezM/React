import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { postPaymentMethodsSession } from "./interceptors/postPaymentMethodsSession.interceptor";
import { Link, useSearchParams } from "react-router-dom";

/**
 cards:
 Visa                 4242424242424242
 Visa (débito)	      4000056655665556
 Mastercard	          5555555555554444
 Mastercard (débito)  5200828282828210
 Mastercard (prepaga) 5105105105105100

 Discover:            6011111111111117
 Discover (débito)	  6011981111111113
 */

const SetupForm = ({ sessionId }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: `http://localhost:3000/account/payments?si=${sessionId.sessionId}`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      console.log("error --> ocurrio un error con la tarjeta", { error });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <div>Agregá el método de pago que vas a usar</div>
      <PaymentElement />
      <button disabled={!stripe}>Submit</button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const stripePromise = loadStripe("pk_test_51LJtHKHNXONEa5Ep562qBhFEmxL5qGkWNZDJuI7yVNBNFLPA2CRCUrGvIMlOMBTtS6907gw1CqVhQKcLjs74PtEt00NF3Z7qQq");

function AddPaymentMethod() {
  console.log("AQUI ESTOY");
  const [serachUrl] = useSearchParams();
  const accountId = serachUrl.get("ai");
  const userId = serachUrl.get("ui");

  const [options, setOptions] = useState({
    clientSecret: "",
    appearance: {
      theme: "stripe",

      variables: {
        colorPrimary: "#8ECCCC",
        colorBackground: "#30313d",
        colorText: "#ffffff",
        colorDanger: "#CF3A3A",
        fontFamily: "'Rubik', sans-serif",
        spacingUnit: "2px",
        borderRadius: "8px",
      },
    },
  });
  const [sessionId, setSessionId] = useState({});
  const [loadMethodPayment, setLoadMethodPayment] = useState(true);

  const [errorMessageUploadPaymentMethod, setErrorMessageUploadPaymentMethod] = useState("");

  useEffect(() => {
    const fetchPaymentMethodsSession = async () => {
      try {
        setErrorMessageUploadPaymentMethod("");
        setLoadMethodPayment(true);
        const fetchPaymentMethodsSession = await postPaymentMethodsSession(accountId, userId);
        console.log({ fetchPaymentMethodsSession });

        if (!fetchPaymentMethodsSession || !fetchPaymentMethodsSession.success) throw new Error("tuvimos un problema");

        // true
        console.log("fetchPaymentMethodsSession.success TRUE -->> ", {
          fetchPaymentMethodsSession,
        });
        setOptions({
          ...options,
          clientSecret: fetchPaymentMethodsSession.data.sessionSecret,
        });
        setSessionId({
          sessionId: fetchPaymentMethodsSession.data.sessionId,
        });
      } catch (error) {
        console.log("error fetchPaymentMethodsSession", error.message);
        setErrorMessageUploadPaymentMethod(error.message);
      } finally {
        setLoadMethodPayment(false);
      }
    };

    fetchPaymentMethodsSession();
  }, []);

  console.log({ options });
  if (loadMethodPayment) return <h1>CARGANDO</h1>;
  if (errorMessageUploadPaymentMethod)
    return (
      <div>
        <h2>{errorMessageUploadPaymentMethod}</h2>
        <Link to="/account/payments">Volver</Link>
      </div>
    );

  return (
    <Elements stripe={stripePromise} options={options}>
      <SetupForm sessionId={sessionId} />
    </Elements>
  );
}

export default AddPaymentMethod;
