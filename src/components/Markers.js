import { Marker, Popup } from "react-leaflet";
import { useJobsCnxt } from "../contexts/JobsContext";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import blackIcon from "../photos/location.svg";
import yellowIcon from "../photos/location-new.svg";

function Markers() {
  const { dataWithCoords, dispatch } = useJobsCnxt();

  const navigate = useNavigate();

  return (
    <>
      {dataWithCoords.map((job) => (
        <Marker
          key={job.id}
          position={[job.latitude, job.longitude]}
          icon={
            new L.Icon({
              iconUrl: `${job.isNew ? yellowIcon : blackIcon}`,
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            })
          }
          eventHandlers={{
            click: () => {
              navigate(`${job.id}`);
              dispatch({ type: "setSelectedID", payload: job.id });
            },
          }}
        >
          <Popup>
            <p className="text-red-400">
              {job.title} @{job.company.display_name}
            </p>
            <p>{job.created}</p>
          </Popup>
        </Marker>
      ))}
    </>
  );

  //   data.map((job) => {
  //     return job.latitude ? (
  //       <Marker
  //         key={job.id}
  //         position={[job.latitude, job.longitude]}
  //         eventHandlers={{
  //           click: () => {
  //             dispatch({ type: "setSelectedID", payload: job.id });
  //           },
  //         }}
  //       >
  //   <Popup>
  //     <p className="text-red-400">
  //       {job.title} @{job.company.display_name}
  //     </p>
  //     <p>{job.created}</p>
  //   </Popup>
  //       </Marker>
  //     ) : null;
  //   });
}

export default Markers;
