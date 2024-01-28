import { useJobsCnxt } from "../contexts/JobsContext";
import { useState } from "react";

export function Query() {
  const [query, setQuery] = useState("");
  const { dispatch } = useJobsCnxt();

  return (
    <div className="bg-gray-200 w-auto rounded-md flex  items-center px-2">
      <form
        className="flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "setQuery", payload: query });
        }}
      >
        <input
          className="focus:outline-none bg-gray-200 py-2 w-36 "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="search..."
        ></input>
        <i className="material-icons cursor-pointer">
          <button>search</button>
        </i>
      </form>
    </div>
  );
}
