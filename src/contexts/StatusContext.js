import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext();

function StatusContext({ children }) {
  const navigate = useNavigate();
  const [status, setStatus] = useState(() => {
    const local = localStorage.getItem("status") || "inactive";
    if (local.includes("active")) return "active";
    return "inactive";
  });

  useEffect(() => {
    localStorage.setItem("status", JSON.stringify(status));
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
