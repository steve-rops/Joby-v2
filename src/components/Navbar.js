import { useUserContext } from "../contexts/UserContext";
import Avvvatars from "avvvatars-react";

export function Navbar() {
  const { user } = useUserContext();
  return (
    <div className="h-[12%] flex items-center px-4 py-2 justify-between md:bg- border-light">
      <h1 className="text-3xl text-indigo-800">Joby</h1>
      <div className="flex gap-2 items-center bg-indigo-500 text-white rounded-md p-2">
        <span className="text-xl">👋🏻</span>
        <span>Hi {user}</span>
        <Avvvatars value={`${user}`} />
      </div>
    </div>
  );
}
