import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PaymentStatus from "./Payments/PaymentStatus";
import App2 from "./Payments/App2";
import { PaymentSection } from "./Payments/EsteEsElValido/PaymentSection";
import AddPaymentMethod from "./Payments/EsteEsElValido/AddPaymentMethod";
import { SuccessPayment } from "./Payments/EsteEsElValido/SuccessPayment";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <h1>App2</h1>
    <Routes>
      <Route path="/" element={<Navigate to="/account/payments" />} />
      <Route path="/account/payments" element={<PaymentSection />} />
      <Route path="/account/payments/add-payment-method" element={<AddPaymentMethod />} />
      <Route path="/payment-success" element={<SuccessPayment />} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
