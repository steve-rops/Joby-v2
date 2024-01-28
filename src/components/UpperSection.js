import { Navbar } from "./Navbar";
import { Filters } from "./Filters";
import { Query } from "./Query";
import { Results } from "./Results";
import SortBy from "./SortBy";

export function UpperSection() {
  return (
    <>
      <Navbar />
      <div className="flex px-4 py-2 items-center gap-1 justify-between">
        <Filters />
        <Query />
        <SortBy />
      </div>
      <Results />
    </>
  );
}
