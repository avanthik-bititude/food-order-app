import axios from "axios";
import { useEffect, useState } from "react";

export const useCheckout = ({ input, url }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitData = async () => {
    try {
      setLoading(true);
      const response = await axios.post(url, input);
      if (response.ok) {
        alert("submitted");
      } else {
        setError("somthing error in submit data");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, submitData };
};
