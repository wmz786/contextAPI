import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const values = useContext(ThemeContext);
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
      <h2 style={{ textAlign: "center" }} className="ui centered header">
        Oak Academy
      </h2>
      <div className="ui three buttons">
        <button className="ui button">OverView</button>
        <button className="ui button">Contact</button>
        <button className="ui button">Support</button>
      </div>
    </div>
  );
};

export default Navbar;
