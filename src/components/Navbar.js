import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import Avvvatars from "avvvatars-react";
import { useStatusContext } from "../contexts/StatusContext";

export function Navbar() {
  const { setStatus } = useStatusContext();
  const { user } = useUserContext();
  return (
    <div className="h-[12%] flex items-center px-4 py-2 justify-between md:bg- border-light">
      <Link to="/" onClick={() => setStatus("inactive")}>
        <h1 className="text-3xl text-indigo-800">Joby</h1>
      </Link>
      <div className="flex gap-2 items-center bg-indigo-500 text-white rounded-md p-2">
        <span className="text-xl">👋🏻</span>
        <span>Hi {user}</span>
        <Avvvatars value={`${user}`} />
      </div>
    </div>
  );
}
