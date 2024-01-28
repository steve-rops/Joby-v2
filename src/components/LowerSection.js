import { Jobs } from "./Jobs";
import { useJobsCnxt } from "../contexts/JobsContext";
import { Loader } from "./Loader";
import { Outlet } from "react-router-dom";

function LowerSection() {
  const { isLoading, selectedID } = useJobsCnxt();

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && selectedID === null && <Jobs />}
      {!isLoading && selectedID && <Outlet />}
    </>
  );
}

export default LowerSection;
