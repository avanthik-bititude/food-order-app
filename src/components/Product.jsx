import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Product = ({ value }) => {
  const { state, addCart } = useContext(CartContext);
  const handleAddCartItem = (value) => {
    addCart(value);
  };
  return (
    <div className=" max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <img
        src={`http://localhost:3000/` + value.image}
        alt="food image"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h1 className="text-xl font-semibold text-gray-800">{value.name}</h1>
        <p className="text-lg text-green-600 font-bold">${value.price}</p>
        <p className="mt-2 text-gray-600">{value.description}</p>
      </div>
      <div className="flex justify-center p-4">
        <button
          onClick={() => handleAddCartItem(value)}
          className="p-4  bg-gray-400 rounded-lg"
        >
          ADD CART
        </button>
      </div>
    </div>
  );
};

export default Product;
