import styles from "./CTA.module.css";
import { useStatusContext } from "../../contexts/StatusContext";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

function CTA() {
  const { setStatus } = useStatusContext();
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  return (
    <>
      <div className="h-[25%] flex items-center justify-center flex-col">
        <h1 className={styles.header}>
          Hi there<span className={styles.wavingHand}>👋🏻</span>
        </h1>
        <h2>
          this is <span className="text-indigo-500 text-lg">Joby</span>. A web
          app for finding your desired job on a map.
        </h2>
      </div>
      <div className="w-full h-[15%] grid place-items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setUser(
              e.target[0].value.length >= 10
                ? e.target[0].value.slice(0, 9)
                : e.target[0].value
            );
            navigate("app");
          }}
          className="flex align-center gap-2"
        >
          <input
            type="text"
            placeholder="tell me your name"
            className="border-[1px] p-2 rounded-xl border-indigo-500"
            required
          />

          <button
            className={`${styles.ctaButton} bg-indigo-500 border-2 border-indigo-500 text-white rounded-xl p-1 px-2 hover:bg-white hover:text-indigo-500  hover:border-2  hover:border-indigo-500 hover:rounded-xl `}
            onClick={() => setStatus("active")}
          >
            let's start
          </button>
        </form>
      </div>
    </>
  );
}

export default CTA;
