import React, { useState, useContext, useEffect } from 'react';
import useFetch from './useFetch';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState(['dune']);
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ isLoading, error, movies, setQuery, query }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
