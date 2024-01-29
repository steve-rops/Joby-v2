import { MapContainer, TileLayer } from "react-leaflet";
import { ChangeView } from "./ChangeView";
import { useJobsCnxt } from "../contexts/JobsContext";
import MapInit from "./MapInit";
import Markers from "./Markers";

export default function Map() {
  const { selectedID } = useJobsCnxt();

  return (
    <div className="map">
      <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {selectedID ? <ChangeView /> : <MapInit />}
        <Markers />
      </MapContainer>
    </div>
  );
}
