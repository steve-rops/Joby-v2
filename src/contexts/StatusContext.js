import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

function StatusContext({ children }) {
  const [status, setStatus] = useState("inactive");

  useEffect(() => {
    localStorage.setItem("status", JSON.stringify(status));
  }, [status]);

  return (
    <Context.Provider value={{ status, setStatus }}>
      {children}
    </Context.Provider>
  );
}

function useStatusContext() {
  const context = useContext(Context);
  return context;
}

export { StatusContext, useStatusContext };
