import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(url);
        if (res.status === 200) {
          setResponse(res.data);
          setIsLoading(false);
        }
      } catch (serverError) {
        setError(serverError);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url, options]);
  return {
    response,
    error,
    isLoading
  };
};
