import { useJobsCnxt } from "../contexts/JobsContext";
import Map from "./Map";
import MapLoader from "./MapLoader";

function RightSectionMap() {
  const { isLoading } = useJobsCnxt();

  return <>{isLoading ? <MapLoader /> : <Map />}</>;
}

export default RightSectionMap;
