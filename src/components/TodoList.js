import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoListContext } from "../contexts/TodoListContext";

// accessing global state with context useing  .Consumer which works in both functional and classs based components
const TodoList = () => {
  const { todos } = useContext(TodoListContext);
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
            {todos.length ? (
              todos.map((todo) => (
                <p key={todo.id} className="item">
                  {todo.text}
                </p>
              ))
            ) : (
              <div>Your todos list is empty</div>
            )}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default TodoList;
