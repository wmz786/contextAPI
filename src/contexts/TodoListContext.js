import { createContext, useState } from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { text: "Plan the family trip", id: 1 },
    { text: "Go for shoping for dinner", id: 2 },
    { text: "recitation of quran kari", id: 4 },
  ]);
  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, id: Math.random() }]);
  };
  const removeTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== Number(id);
      })
    );
  };
  return (
    <TodoListContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
