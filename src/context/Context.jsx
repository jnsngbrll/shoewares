import React, { createContext, useState } from 'react';

export const Context = createContext(null);

export const ContextProvider = (props) => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const ContextValue = { showSearchBar, setShowSearchBar };
  return (
    <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
  );
};
