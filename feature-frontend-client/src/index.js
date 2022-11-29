import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FlagProvider from "@unleash/proxy-client-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const config = {
  url: process.env.REACT_APP_PROXY_URL,
  clientKey: "react-proxy",
  refreshInterval: 10,
  appName: "WallgreensCoupons",
  environment: "dev",
};

root.render(
  <React.StrictMode>
    <FlagProvider config={config}>
      <App />
    </FlagProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
