import { useEffect, useState } from "react";
import { ComponentTest } from "./components/componentTest";
import { SegundoComponentText } from "./components/SegundoComponentText";
import { TecerComponentTest } from "./components/TecerComponentTest";
import { ErrorBoundary } from "./utilities/ErrorBunderies.util";

export default function App() {
  const [name, setName] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setName("cuati");
    }, 2000);
  }, []);

  return (
    <div>
      <ErrorBoundary fallbackComponent={<>Upss!!! Ocurrió un error!!!!</>} resetCondition={name}>
        <ComponentTest name={name} />
      </ErrorBoundary>
      <SegundoComponentText />

      <TecerComponentTest />
    </div>
  );
}
