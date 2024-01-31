import { createContext, useContext, useEffect, useState } from "react";

const CreatedContext = createContext();

function UserContext({ children }) {
  const [user, setUser] = useState(() => {
    return localStorage.getItem("user");
  });

  useEffect(
    function () {
      if (user === "") return;
      localStorage.setItem("user", user);
    },
    [user]
  );
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
