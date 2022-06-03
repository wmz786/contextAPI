import { createContext, useState } from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
  const [todos] = useState([
    { text: "Plan the family trip", id: 1 },
    { text: "Go for shoping for dinner", id: 2 },
    { text: "recitation of quran kari", id: 4 },
  ]);
  return (
    <TodoListContext.Provider value={{ todos }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
