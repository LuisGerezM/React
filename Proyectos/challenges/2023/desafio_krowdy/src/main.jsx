import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QuestionRecorderProvider } from "./contexts/Recorder.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QuestionRecorderProvider>
      <App />
    </QuestionRecorderProvider>
  </BrowserRouter>
);
