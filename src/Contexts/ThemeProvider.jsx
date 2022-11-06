import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const rootElement = window.document.documentElement;

    if (theme) {
      rootElement.classList.add("dark");
      rootElement.classList.remove("light");
    } else {
      rootElement.classList.add("light");
      rootElement.classList.remove("dark");
    }

    // ** get data from ls

    const storedTheme = JSON.parse(localStorage.getItem("theme"));

    setTheme(storedTheme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(!theme);

    localStorage.setItem("theme", !theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
