import { Link } from "react-router-dom";
import styles from "./CTA.module.css";
import { useStatusContext } from "../../contexts/StatusContext";

function CTA() {
  const { setStatus } = useStatusContext();
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
        <Link to="app">
          <button
            className={`${styles.ctaButton} bg-indigo-500 text-white rounded-xl p-1 px-2 hover:bg-white hover:text-indigo-500 hover:border-2 hover:border-indigo-500 hover:rounded-xl transition `}
            onClick={() => setStatus("active")}
          >
            let's start
          </button>
        </Link>
      </div>
    </>
  );
}

export default CTA;
