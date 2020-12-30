import React from "react";
import pizzas from "../data/pizzas.json";
import AppStateProvider from "./AppState";
import PizzaItem from "./Pizza";
import AppCss from "./App.module.css";
import PizzaSVG from "../svg/pizza.svg";
import Cart from "./Cart";
import SpecialOffer from "./SpecialOffer";

const App = () => {
    const special = pizzas.find(item => item.specialOffer);
  return (
    <AppStateProvider>
      <div className={AppCss.container}>
        <div className={AppCss.header}>
          <PizzaSVG width={120} height={120} />
          <div className={AppCss.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>
        {special && <SpecialOffer pizza={special}/>}
        <ul className={AppCss.pizzaList}>
          {pizzas.map((pizza) => {
            return <PizzaItem key={pizza.id} pizza={pizza} />;
          })}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
