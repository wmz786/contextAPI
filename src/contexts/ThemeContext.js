import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  //   const [isDarkTheme, setIsDarkTheme] = useState(true);
  //   const [lightTheme, setLighttheme] = useState({
  //     text: "#222",
  //     background: "#d8ddf1",
  //   });
  //   const [darkTheme, setDarktheme] = useState({
  //     text: "#fff",
  //     background: "#5c5c5c",
  //   });
  const [values, setValues] = useState({
    isDarkTheme: true,
    lightTheme: {
      text: "#222",
      background: "#d8ddf1",
    },
    darkTheme: {
      text: "#fff",
      background: "#5c5c5c",
    },
  });
  return (
    <ThemeContext.Provider value={values}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
