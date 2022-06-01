import { ThemeContext } from "../contexts/ThemeContext";

// accessing global state with context useing  .Consumer which works in both functional and classs based components
const TodoList = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isDarkTheme, darkTheme, lightTheme } = context.values;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return (
          <div
            style={{
              background: theme.background,
              color: theme.text,
              height: "140px",
              textAlign: "center",
            }}
          >
            <p className="item">Plan the family trip</p>
            <p className="item">Go for shoping for dinner</p>
            <p className="item">Go for a walk</p>
            <p className="item">recitation of quran karim</p>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default TodoList;
