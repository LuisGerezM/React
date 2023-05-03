import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <Auth0Provider
    // domain="dev-gwc3h1jas0ww8qnv.us.auth0.com"
    // clientId="gwLZl7ON8jZrQR5v7QSFVPxP1ViBHZCz"
    domain="https://auth.gyfted.io/auth"
    clientId="bookstore-client"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
