import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// accessing global state with context api useing static context type, it works just in class based components
class Footer extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkTheme, darkTheme, lightTheme } = this.context.values;
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
      <div
        style={{
          background: theme.background,
          color: theme.text,
          textAlign: "center",
        }}
      >
        <button
          className="ui button primary"
          onClick={this.context.changeValue}
        >
          Change the theme
        </button>
        <p className="item">Prepared By: Unknown</p>
      </div>
    );
  }
}

export default Footer;
