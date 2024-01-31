import { Marker, Tooltip } from "react-leaflet";
import { useJobsCnxt } from "../contexts/JobsContext";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import blackIcon from "../photos/location.svg";
import yellowIcon from "../photos/location-new.svg";
import { countries } from "../data/countries";

function Markers() {
  const { country } = useJobsCnxt();
  const currency = countries.filter((el) => el.short === country)[0].currency;
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
          {console.log(job)}
          <Tooltip offset={[12, -25]} opacity={1} className="rounded-md">
            <div className="flex gap-1">
              <span className="p-1 px-2 font-medium bg-indigo-200 text-indigo-700 w-fit rounded-md">
                {Math.floor(job.salary_max / 1000)} k {currency}
              </span>
              {job.isNew ? (
                <span className="p-1 px-2 font-medium bg-yellow-400 text-yellow-800 w-fit rounded-md">
                  NEW
                </span>
              ) : (
                ""
              )}
            </div>
            <p className="text-wrap">{job.title}</p>
          </Tooltip>
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
