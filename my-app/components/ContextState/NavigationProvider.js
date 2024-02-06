import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const useNavigationContext = () => useContext(NavigationContext);


export const NavigationProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <NavigationContext.Provider value={{ open, setOpen }}>
      {children}
    </NavigationContext.Provider>
  );
};