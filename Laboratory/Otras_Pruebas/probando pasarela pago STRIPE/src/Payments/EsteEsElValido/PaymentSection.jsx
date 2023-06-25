import { useState } from "react";
import { useEffect } from "react";
import { Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { getUserPaymentMethods } from "./interceptors/getUserPaymentMethods.interpector";
import { postPaymentMethods } from "./interceptors/postPaymentMethods.interceptor";
import { postPayments } from "./interceptors/postPayments.interceptor";

let minValue = 1;
const validationSchema = {
  paymentMethod: {
    required: { value: true, message: "Debes seleccionar un método de pago" },
  },
  amountDays: {
    required: {
      value: true,
      message: "Debes seleccionar la cantidad de días que quieres agregar",
    },
    validate: {
      positiveNumber: (value) => {
        return parseInt(value) > minValue;
      },
    },
  },
};

const accountId = "40cfc1c6-d510-4927-832c-f9452d8c00df";
const userId = "f5797fd0-b58b-40c0-acb4-dc487cdf921b";

export const PaymentSection = () => {
  const [serachUrl] = useSearchParams();
  const sessionId = serachUrl.get("si");

  const [paymentMethods, setPaymentMethods] = useState([]);
  const [addedNewPaymentMethod, setAddedNewPaymentMethod] = useState(false);

  const [messageWithoutPaymentMethod, setMessageWithoutPaymentMethod] = useState("");

  const [paymentMethodSelected, setPaymentMethodSelected] = useState({});

  const [accountTimeExtension, setAccountTimeExtension] = useState("30");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ defaultValues: { paymentMethod: "", amountDays: 30 } });

  const fetchPaymentMethods = async () => {
    setMessageWithoutPaymentMethod("");
    try {
      const fetchMethods = await getUserPaymentMethods(accountId);

      if (!fetchMethods || !fetchMethods.success) {
        console.log("catch error");
      }

      if (fetchMethods.data.length > 0) {
        setPaymentMethods(fetchMethods.data);
        setAddedNewPaymentMethod(true);
      } else setMessageWithoutPaymentMethod("Aún no tienes un método de pago");
    } catch (error) {
      console.error("error", error);
    }
  };

  const fetchUserPaymentMethods = async () => {
    setMessageWithoutPaymentMethod("");
    try {
      const fetchMethods = await postPaymentMethods(accountId, sessionId);

      if (!fetchMethods || !fetchMethods.success) {
        console.log("catch error");
        throw new Error("ocurrio un problema che");
      }

      if (fetchMethods.data.length === 0) setMessageWithoutPaymentMethod("Aún no tienes un método de pago");
      else {
        console.log("terminado añadir nuevo metodo de pago");
        setAddedNewPaymentMethod(true);
        setMessageWithoutPaymentMethod("");
        fetchPaymentMethods();
      }
    } catch (error) {
      console.error("error", error.message);
    }
  };

  useEffect(() => {
    if (!sessionId && !addedNewPaymentMethod) {
      fetchPaymentMethods();
    } else if (!addedNewPaymentMethod) fetchUserPaymentMethods();
  }, []);

  const onSubmit = async (data) => {
    try {
      const dataToSend = {
        paymentMethodId: data.paymentMethod,
        days: data.amountDays,
        amount: data.amountDays,
        accountId,
        profileId: "0bfdab3f-db32-4042-8863-f1d22896a596",
        currency: "USD",
      };

      const sendPayment = await postPayments(dataToSend);

      if (!sendPayment || !sendPayment.success) {
        console.log("show error");
      }
      navigate("/payment-success", { replace: true });
    } catch (error) {
      console.error("error", error.mnessage);
    }
  };

  const watchFields = watch(["paymentMethod", "amountDays"]);

  useEffect(() => {
    const findPaymentMethodSelected = paymentMethods.find((element) => element.id === parseInt(watchFields[0]));

    if (findPaymentMethodSelected) setPaymentMethodSelected(paymentMethods.find((element) => element.id === parseInt(watchFields[0])));

    setAccountTimeExtension(watchFields[1]);
  }, [watchFields]);

  return (
    <div>
      <div>
        <Link to={`/account/payments/add-payment-method?ai=${accountId}&ui=${userId}`}>Agregar método de pago</Link>
      </div>

      {paymentMethods.length > 0 && (
        <Card className="m-5 p-5" style={{ color: "blue" }}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Medio de pago</Form.Label>
              <Form.Select {...register("paymentMethod", validationSchema.paymentMethod)}>
                <option value="">Selecciona el medio para pagar</option>
                {paymentMethods?.map(
                  (payMethod, idx) =>
                    payMethod.active && (
                      <option key={idx} value={payMethod.id}>
                        {payMethod.creditCardType}
                      </option>
                    )
                )}
              </Form.Select>
              {errors.paymentMethod && <div>{errors.paymentMethod.message}</div>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Cantidad de días (valor $USD 1)</Form.Label>
              <Form.Control type="number" placeholder="Agrega la cantidad de días" {...register("amountDays", validationSchema.amountDays)} min={1} />
              {errors.amountDays && <div>{errors.amountDays ? errors.amountDays.message : "Debes ingresar un número igual o mayor a 1"}</div>}
            </Form.Group>
            {watchFields[0] && Object.keys(paymentMethodSelected).length > 0 && (
              <Card>
                <div className="px-2 my-3">Seleccionaste:</div>
                <div className="px-2 d-flex flex-wrap ">
                  <div className="col col-4 mt-2">Tipo: {paymentMethodSelected.creditCardType}</div>
                  <div className="col col-4 mt-2">
                    Número: XXXX XXXX XXXX
                    {` ${paymentMethodSelected.creditCardNumber}`}
                  </div>
                  <div className="col col-4 mt-2">
                    Mes expiración:
                    {paymentMethodSelected.creditCardExpirationMonth}
                  </div>
                  <div className="col col-4 mt-2">
                    Año Expiración:
                    {paymentMethodSelected.creditCardExpirationYear}
                  </div>
                  <div className="col col-4 my-2 d-flex flex-column">
                    <div>Usted está agregando:</div>
                    <div>
                      {accountTimeExtension} <strong>días</strong> a razón de
                      <strong>{` ${accountTimeExtension}`} $USD</strong>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            <button className="mt-2" type="submit">
              Pagar
            </button>
          </Form>
        </Card>
      )}
      {messageWithoutPaymentMethod && <div>{messageWithoutPaymentMethod}</div>}
    </div>
  );
};
