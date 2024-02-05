import { useJobsCnxt } from "../contexts/JobsContext";
import LocationSVG from "./LocationSVG";
import JobLeftSide from "./JobLeftSide";
import JobRightSide from "./JobRightSide";
import JobCategoryTags from "./JobCategoryTags";
import Created from "./Created";
import { Link } from "react-router-dom";

export function Job({ workInfo }) {
  const { dispatch } = useJobsCnxt();

  return (
    <li
      className=" h-fit list-none px-1 py-2 bg-indigo-100 rounded-2xl my-5 shadow-xl mr-3 job-info cursor-pointer  "
      onClick={() => dispatch({ type: "setSelectedID", payload: workInfo.id })}
    >
      <Link to={`${workInfo.id}`}>
        <div className="upper flex items-center">
          <JobLeftSide workInfo={workInfo} />
          <JobRightSide workInfo={workInfo} />
        </div>
        <LocationSVG>{workInfo.location.display_name}</LocationSVG>
        <div className="flex justify-between items-center">
          <JobCategoryTags workInfo={workInfo} />
          <Created workInfo={workInfo} />
        </div>
      </Link>
    </li>
  );
}
