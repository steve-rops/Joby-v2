import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext();

function StatusContext({ children }) {
  const navigate = useNavigate();
  const [status, setStatus] = useState("inactive");

  useEffect(() => {
    localStorage.setItem("status", JSON.stringify(status));
    if (status === "inactive") navigate("/");
  }, [status, navigate]);

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
