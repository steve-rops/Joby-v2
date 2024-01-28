import { useMap } from "react-leaflet";
import { useJobsCnxt } from "../contexts/JobsContext";

function MapInit() {
  const { dataWithCoords } = useJobsCnxt();
  const bounds = dataWithCoords.map((job) => [job.latitude, job.longitude]);
  const map = useMap();
  map.fitBounds(bounds);
  return null;
}

export default MapInit;
