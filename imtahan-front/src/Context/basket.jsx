import React, { createContext, useState } from "react";
import useLocalStrg from "../Hook/useLocalStrg";

export const BasketContext = createContext();

function BasketProvider({ children }) {
  const [basket, setbasket] = useLocalStrg("basket", []);

  function addBasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    if (index === -1) {
      setbasket([...basket, { ...item, count: 1 }]);
    } else {
      basket[index].count++;
      setbasket([...basket]);
    }
  }

  function removerBasket(item) {
    setbasket(basket.filter((x) => x._id !== item._id));
  }
  function increase(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    basket[index].count++;
    setbasket([...basket]);
  }

  function decrese(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    if (basket[index] === 1) {
      return;
    } 
    else {
      basket[index].count--;
      setbasket([...basket]);
    }
  }

  function totalPrice() {
    return basket
      .reduce((total, item) => total + item.count * item.price, 0)
      .toFixed(2);
  }

  const data = {
    basket,
    addBasket,
    removerBasket,
    increase,
    decrese,
    totalPrice,
  };
  return (
    <BasketContext.Provider value={data}>{children}</BasketContext.Provider>
  );
}

export default BasketProvider;
