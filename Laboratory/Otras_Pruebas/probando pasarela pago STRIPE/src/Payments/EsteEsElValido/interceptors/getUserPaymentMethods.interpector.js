export async function fetchAPI({ url, method, body, headers }) {
  try {
    console.log({ url, method, body, headers });

    const controller = new AbortController();

    setTimeout(() => {
      controller.abort();
    }, 10000);

    const response = await fetch(url, {
      signal: controller.signal,
      method,
      body,
      headers,
    });

    return response.clone().json();
  } catch (error) {
    Promise.reject(error);
  }
}

export const getUserPaymentMethods = async (accountId) => {
  try {
    const headers = {
      Authorization: `Bearer JWT`,
    };

    const fetchingUserPaymentMethods = await fetchAPI({
      method: "GET",
      url: `https://BASE_URL/${accountId}/PaymentMethods`,
      headers,
    });
    return fetchingUserPaymentMethods;
  } catch (error) {
    console.error("error get interceptor getUserPaymentMethods", { error });
    return { success: false, code: "X" };
  }
};
