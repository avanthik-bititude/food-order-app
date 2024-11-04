import React from "react";

const Error = ({ message }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
      <div className="p-6 bg-white rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-red-600">Oops!</h2>
        <p className="mt-2 text-gray-700">{message}</p>
      </div>
    </div>
  );
};

export default Error;
