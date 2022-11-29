import "./App.css";
import FestiveDiscounts from "./FestiveDiscounts";

//import { useFlag } from "@unleash/proxy-client-react";
import Feature from "./Feature";

function App() {
  //const festiveDiscountsActive = useFlag('Walgreens-festive-discounts');

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Welcome to Walgreens Pharmacy Store</h1>
      <Feature name="Walgreens-festive-discounts">
        <FestiveDiscounts />
      </Feature>
      <Feature name="Walgreens-festive-discounts" invert="true">
        <h1 style={{ color: "blue" }}>
          Festive Discounts are over, Regular pricing applicable to all products
          !!!
        </h1>
      </Feature>
    </div>
  );
}

export default App;
