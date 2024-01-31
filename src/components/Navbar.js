import { useUserContext } from "../contexts/UserContext";
import Avvvatars from "avvvatars-react";
import { useStatusContext } from "../contexts/StatusContext";
import styles from "./Navbar.module.css";
import { RiShutDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const { setStatus } = useStatusContext();
  const { user } = useUserContext();
  const navigate = useNavigate();
  return (
    <div className="h-[12%] flex items-center px-4 py-2 justify-between md:bg- border-light ">
      <h1
        className="text-3xl text-indigo-800 cursor-pointer"
        onClick={() => {
          navigate("/");
          setStatus("inactive");
        }}
      >
        Joby
      </h1>

      <div className="flex gap-2 items-center bg-indigo-500 text-white rounded-md p-2">
        <span className="text-xl">👋🏻</span>
        <span>Hi {user}</span>
        <div
          className={`${styles.coinContainer}`}
          onClick={() => {
            setStatus("inactive");
            navigate("/");
          }}
        >
          <div className={`${styles.coin} ${styles.front}`}>
            <Avvvatars value={`${user}`} />
          </div>
          <div className={`${styles.coin} ${styles.back} cursor-pointer`}>
            <RiShutDownLine />
          </div>
        </div>
      </div>
    </div>
  );
}
