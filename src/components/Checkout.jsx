import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useCheckout } from "../hooks/useCheckout";
import Loading from "./Loading";
import Error from "./Error";

const Checkout = ({ onClickBack }) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  const url = "http://localhost:3000/orders";
  const { loading, error, submitData } = useCheckout(url, input);

  const handleInputChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (!input.email || !input.name) {
      alert("please fill all the fields");
    } else {
      submitData();
      setInput({
        name: "",
        email: "",
      });
      console.log("submitted data");
    }
  };

  const { state } = useContext(CartContext);
  console.log(state.items);

  const totalPrice = state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <>
      {loading ?? <Loading />}
      {error ?? <Error />}
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Checkout
        </h2>
        <form onSubmit={handleSubmitForm}>
          <div className="mb-4">
            <label
              htmlFor="Name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="Name"
              onChange={handleInputChange}
              name="name"
              value={input.name}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="Phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
              value={input.email}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Email"
            />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Total Price : {totalPrice}
            </h3>
          </div>

          <div className="flex justify-between">
            <button
              onClick={onClickBack}
              className="w-[100px] py-2 bg-white text-black font-semibold rounded-md hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Back
            </button>
            <button className="w-[100px] py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Checkout
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
