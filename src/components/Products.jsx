import React from "react";
import useFetch from "../hooks/useFetch";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const Products = () => {
  const url = "http://localhost:3000/meals";
  const { fetchedData, isLoading, error } = useFetch(url,[]);

  return (
    <div className="flex flex-col">
      {error && <Error message={error} className="text-red-600 font-bold" />}
      {isLoading && <Loading className="text-lg italic" />}
      {!isLoading && !error && fetchedData.length === 0 && (
        <p className="text-gray-700">No products found.</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {!isLoading &&
          !error &&
          fetchedData.map((value) => (
            <div key={value.id} className="">
              <Product value={value} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
