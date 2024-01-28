import { useMap } from "react-leaflet";
import { useJobsCnxt } from "../contexts/JobsContext";

export function ChangeView() {
  const { data, selectedID } = useJobsCnxt();
  const [selectedJob] = data.filter((job) => Number(job.id) === selectedID);
  const map = useMap();
  map.setView([selectedJob.latitude, selectedJob.longitude], 13);

  return null;
}
