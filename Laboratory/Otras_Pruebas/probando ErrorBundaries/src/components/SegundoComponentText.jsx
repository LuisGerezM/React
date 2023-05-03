import { useEffect, useState } from "react";
import { ErrorBoundary } from "../utilities/ErrorBunderies.util";

export const SegundoComponentText = () => {
  const [result, setResult] = useState();
  const [error, setError] = useState(false);

  let url = "https://rickandmortyapi.com/api/character212w/1";

  const fetchRickAndMorty = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.error) throw new Error("Upss..!! Hubo un error");

      setError(null);
      setResult(data);
    } catch (error) {
      console.error("error", error.message);
      url = "https://rickandmortyapi.com/api/character/1";
      setError("Error fetchRickAndMorty - " + error);
    }
  };

  useEffect(() => {
    fetchRickAndMorty();
    setTimeout(() => {
      fetchRickAndMorty();
    }, 3000);
  }, []);

  return (
    <ErrorBoundary fallbackComponent={<>Error en 2do componente!!!!</>} resetCondition={result} error={error}>
      <h2>{JSON.stringify(result)}</h2>
    </ErrorBoundary>
  );
};
