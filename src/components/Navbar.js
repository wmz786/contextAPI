import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


// accessing global state with context useing useContext hook, it works just for functional based components
const Navbar = () => {
  const { values } = useContext(ThemeContext);
  const { isDarkTheme, darkTheme, lightTheme } = values;
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        hieght: "120px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Oak Academy</h2>
      <div className="ui three buttons">
        <button className="ui button">OverView</button>
        <button className="ui button">Contact</button>
        <button className="ui button">Support</button>
      </div>
    </div>
  );
};

export default Navbar;
  