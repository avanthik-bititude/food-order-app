import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = ({ onClickCart }) => {
  const { state } = useContext(CartContext);
  const totalItems = state.items.reduce((totalItem, item) => {
    return totalItem + item.quantity;
  }, 0);

  return (
    <div className="flex items-center justify-between p-4 bg-gray-600 text-white mb-4">
      <div className="flex items-center">
        <img
          className="w-15 h-10 mr-2"
          src="https://w7.pngwing.com/pngs/894/279/png-transparent-online-food-ordering-food-delivery-grubhub-others-food-service-logo.png"
          alt="logo"
        />
        <h1 className="text-lg font-bold">Food Order App</h1>
      </div>
      <button
        onClick={onClickCart}
        className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
      >
        {totalItems > 0 ? "cart (" + totalItems + ")" : "cart"}
      </button>
    </div>
  );
};

export default Navbar;
