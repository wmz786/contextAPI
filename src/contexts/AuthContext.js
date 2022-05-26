import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeAuthValue = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <AuthContext.Provider value={{ ...isLoggedIn, changeAuthValue }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
