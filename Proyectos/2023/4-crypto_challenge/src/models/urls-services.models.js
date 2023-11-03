export const getEnviroments = () => {
  const env = import.meta.env;
  return {
    ...env,
  };
};

export const URLs = {
  allCryptos: `${
    getEnviroments().VITE_API_BASE_URL
  }/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500d&sparkline=false&price_change_percentage=24h&locale=en`,
};
