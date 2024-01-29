import { useUserContext } from "../contexts/UserContext";

export function Navbar() {
  const { user } = useUserContext();
  return (
    <div className="h-[12%] flex items-center px-4 py-2 justify-between md:bg- border-light">
      <h1 className="text-3xl text-indigo-800">Joby</h1>
      <div className="flex gap-2 items-center bg-indigo-500 text-white rounded-md p-2">
        <span className="text-xl">👋🏻</span>
        <span>Hello, {user} </span>
        <img
          src="https://api.dicebear.com/7.x/adventurer/svg?scale=200"
          alt="avatar"
          className="h-[35px] rounded-xl "
        ></img>
      </div>
    </div>
  );
}
