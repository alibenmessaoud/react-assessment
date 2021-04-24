import { useEffect, useState } from 'react';

/**
 * - set a debounced value to value (passed in) after a specified delay.
 * - only recall effect if value or delay changes.
 */
export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
