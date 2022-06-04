import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoListContext } from "../contexts/TodoListContext";

// accessing global state with context useing  .Consumer which works in both functional and classs based components
const TodoList = () => {
  const { todos, dispatch } = useContext(TodoListContext);
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", text: todo });
  };
  const handleRemoveTodo = (e) => {
    const id = e.target.id;
    dispatch({ type: "REMOVE_TODO", id });
  };
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
              // height: "140px",
              textAlign: "center",
            }}
          >
            {todos.length ? (
              todos.map((todo) => (
                <p
                  id={todo.id}
                  onClick={handleRemoveTodo}
                  key={todo.id}
                  className="item"
                >
                  {todo.text}
                </p>
              ))
            ) : (
              <div>Your todos list is empty</div>
            )}
            <form onSubmit={handleSubmit}>
              <input type="text" onChange={handleChange} />
              <input
                type="submit"
                value="Add New Todo"
                className="ui primary button"
              />
            </form>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default TodoList;
