import { useState } from "react";
import { FilterSVG } from "../svgs";

function SortBy() {
  const [sortValue, setSortValue] = useState("sort");
  return (
    <div className="flex items-center rounded-lg cursor-pointer border-none border-light w-min rounded-md shadow-md py-1 px-1">
      <FilterSVG />
      <select
        className="text-indigo-500  "
        value={sortValue}
        onChange={(e) => setSortValue(e.target.value)}
      >
        <option defaultChecked disabled value="sort" hidden>
          Sort
        </option>
        <option value="newFirst">new first</option>
        <option value="oldFirst">old first</option>
        <option value="minMax">salary &darr;</option>
        <option value="maxMin">salary &uarr;</option>
      </select>
    </div>
  );
}

export default SortBy;
