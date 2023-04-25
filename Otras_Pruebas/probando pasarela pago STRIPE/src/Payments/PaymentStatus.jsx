import { useSearchParams } from "react-router-dom";

const PaymentStatus = () => {
  const [serachUrl, setSearchParams] = useSearchParams();
  const setupIntent = serachUrl.get(`setup_intent`);
  const setupIntentClientSecret = serachUrl.get(`setup_intent_client_secret`);
  const redirectStatus = serachUrl.get(`redirect_status`);

  console.log({ setupIntent, setupIntentClientSecret, redirectStatus });

  return <div>PaymentStatus</div>;
};
export default PaymentStatus;
