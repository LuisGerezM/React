import "./App.css";
import { useEffect, useState } from "react";

const imageURL = "https://via.placeholder.com/600/92c952";

function App() {
  const [base64URL, setBase64URL] = useState();

  const conv = async () => {
    try {
      const data = await fetch(imageURL);
      const blob = await data.blob();
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };

        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error("error conv", error.message);
    }
  };

  useEffect(() => {
    const convertTo = async () => {
      setBase64URL(await conv());
    };
    convertTo();
  }, []);

  console.log({ base64URL });
  return (
    <div className="App d-flex justify-content-center align-items-center" style={{ background: "gray", minHeight: "100vh" }}>
      <img src={base64URL} alt="img To Base64" />
    </div>
  );
}

export default App;
