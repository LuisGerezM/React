import { fetchAPI } from "./getUserPaymentMethods.interpector";

export const postPaymentMethods = async (accountId, sessionId) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "JWT",
    };

    const fetchPaymentMethods = await fetchAPI({
      url: `https://api-dev.rbbooking.com/v1/Account/${accountId}/PaymentMethods`,
      method: "POST",
      headers,
      body: JSON.stringify({ sessionId }),
    });

    return fetchPaymentMethods;
  } catch (error) {
    console.error("error post interceptor postPaymentMethods", { error });
    return { success: false, code: "X" };
  }
};
