import { fetchAPI } from "./getUserPaymentMethods.interpector";

export const postPaymentMethodsSession = async (accountId, userId) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "JWT",
    };

    const fetchPaymentMethods = await fetchAPI({
      url: `baseURL/${accountId}/PaymentMethods/Session`,
      method: "POST",
      headers,
      body: JSON.stringify({ id: userId }),
    });

    return fetchPaymentMethods;
  } catch (error) {
    console.error("error post interceptor postPaymentMethodsSession", {
      error,
    });
    return { success: false, code: "X" };
  }
};
