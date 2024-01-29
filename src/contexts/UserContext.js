import { createContext, useContext, useState } from "react";

const CreatedContext = createContext();

function UserContext({ children }) {
  const [user, setUser] = useState("");
  return (
    <CreatedContext.Provider value={{ user, setUser }}>
      {children}
    </CreatedContext.Provider>
  );
}

const useUserContext = function () {
  const userContext = useContext(CreatedContext);
  return userContext;
};

export { UserContext, useUserContext };
