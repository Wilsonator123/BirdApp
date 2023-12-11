// ColorSchemeContext.js
import React, { createContext, useState } from 'react';

const ColorSchemeContext = createContext();

const ColorSchemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleColorScheme = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <ColorSchemeContext.Provider value={{ isDarkMode, toggleColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export { ColorSchemeContext, ColorSchemeProvider };
