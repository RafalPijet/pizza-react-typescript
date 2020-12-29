import React from "react";
import pizzas from "../data/pizzas.json";
import AppStateProvider from "./AppState";
import Pizza from "./Pizza";
import AppCss from "./App.module.css";
import PizzaSVG from "../svg/pizza.svg";
import Cart from "./Cart";

const App = () => {
  return (
    <AppStateProvider>
      <div className={AppCss.container}>
        <div className={AppCss.header}>
          <PizzaSVG width={120} height={120} />
          <div className={AppCss.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>
        <ul>
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.id} pizza={pizza} />;
          })}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
