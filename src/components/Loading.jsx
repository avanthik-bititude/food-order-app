import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-32 w-36 border-t-4 border-gray-800 border-b-4"></div>
        <p className="mt-4 text-lg text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
