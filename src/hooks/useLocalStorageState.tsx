import React from 'react';

interface SerializerSettings {
  serialize?: any;
  deserialize?: any;
}

/**
 * 👷 - Manage local storage
 * @param {String} key The key to set in localStorage for this value
 * @param {Object} defaultValue The value to use if it is not already in localStorage
 * @param {{serialize: Function, deserialize: Function}} options The serialize and deserialize functions to use (defaults to JSON.stringify and JSON.parse respectively)
 */
function useLocalStorageState(
  key: string,
  defaultValue: string | (() => void),
  {
    serialize = JSON.stringify,
    deserialize = JSON.parse,
  }: SerializerSettings = {}
): [any, (value: any) => void] {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = localStorage.getItem(key);

    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }

    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  });

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;

    if (prevKey !== key) {
      localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}

export default useLocalStorageState;
