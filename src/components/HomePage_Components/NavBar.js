import { Link, NavLink } from "react-router-dom";
import LogInButton from "./LogInButton";

function NavBar() {
  return (
    <div className="h-[10%] w-full p-2 px-8 shadow-md grid ">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <h1 className="text-3xl text-indigo-800">Joby</h1>
        </Link>
        <div className="flex gap-3 items-center text-indigo-700">
          <NavLink className="hover:text-indigo-500" to="/about">
            about
          </NavLink>
          <NavLink className="hover:text-indigo-500" to="/employers">
            employers
          </NavLink>
          <NavLink className="hover:text-indigo-500" to="/pricing">
            pricing
          </NavLink>
          <LogInButton />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
