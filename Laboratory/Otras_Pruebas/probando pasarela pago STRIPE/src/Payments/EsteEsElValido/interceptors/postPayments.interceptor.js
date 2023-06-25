import { fetchAPI } from "./getUserPaymentMethods.interpector";

export const postPayments = async (data) => {
  try {
    console.log(data, `https://api-dev.rbbooking.com/v1/Payments`);

    const headers = {
      "Content-Type": "application/json",
      Authorization: "JWT",
    };

    const setPayment = await fetchAPI({
      url: "URL",
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
    return setPayment;
  } catch (error) {
    console.error("error post interceptor postPayments", { error });
    return { success: false, code: "X" };
  }
};
