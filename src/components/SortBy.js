import { FilterSVG } from "../svgs";
import { useJobsCnxt } from "../contexts/JobsContext";

function SortBy() {
  const { dispatch, sortedBy } = useJobsCnxt();

  return (
    <div className="flex items-center cursor-pointer border-none border-light w-min rounded-md shadow-md py-1 px-1">
      <FilterSVG className="cursor-pointer" />
      <select
        className="text-indigo-500 cursor-pointer  "
        value={`${sortedBy ? sortedBy : "sort"}`}
        onChange={(e) => {
          dispatch({ type: "sort", payload: e.target.value });
        }}
      >
        <option defaultChecked value="sort" hidden>
          Sort
        </option>
        {/* <option value="newFirst">new first</option>
        <option value="oldFirst">old first</option> */}
        <option value="minMax">salary &uarr;</option>
        <option value="maxMin">salary &darr;</option>
      </select>
    </div>
  );
}

export default SortBy;
