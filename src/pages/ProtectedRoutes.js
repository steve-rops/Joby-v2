import { useNavigate } from "react-router-dom";
import { useStatusContext } from "../contexts/StatusContext";
import { useUserContext } from "../contexts/UserContext";
import { useEffect } from "react";

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { status } = useStatusContext();

  useEffect(
    function () {
      if (!user || status === "inactive") navigate("/");
    },
    [navigate, status, user]
  );

  return children;
}

export default ProtectedRoutes;
