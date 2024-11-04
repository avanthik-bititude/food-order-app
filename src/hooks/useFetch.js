import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, initialValue) => {
  const [fetchedData, setFetchedData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        if (response.data) {
          setFetchedData(response.data);
        } else {
          setError("somthing error in fetching data");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { fetchedData, isLoading, error };
};

export default useFetch;
