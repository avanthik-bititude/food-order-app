import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = ({ onClickCart, onClickCheckout }) => {
  const { state } = useContext(CartContext);
  console.log(state.items);

  const totalPrice = state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {state.items.length === 0 ? (
        <h2 className="text-lg text-gray-600">No cart items found</h2>
      ) : (
        <ul className="mb-4">
          {state.items.map((item) => (
            <li key={item.id} className="flex justify-between py-2 border-b">
              <span className="text-gray-800">{item.name}</span>
              <span className="text-gray-600">{item.price}</span>
              <span className="text-gray-600">{item.quantity}</span>
            </li>
          ))}
        </ul>
      )}
      <p className="text-xl font-semibold">Total Price: ${totalPrice}</p>
      <div className="flex justify-between mt-6">
        <button
          onClick={onClickCart}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
        >
          Close
        </button>
        <button
          onClick={onClickCheckout}
          className="bg-gray-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
