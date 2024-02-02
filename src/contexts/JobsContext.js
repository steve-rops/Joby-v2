import { createContext, useContext, useEffect, useReducer } from "react";
import { useStatusContext } from "./StatusContext";
const _key = process.env.REACT_APP_KEY.slice(1, -2);
const _id = process.env.REACT_APP_ID.slice(1, -2);
const queryNumber = Number(process.env.REACT_APP_DATA_QUERY_NUMBER.slice(0, 2));
const Context = createContext();

const initialState = {
  country: "us",
  data: [],
  query: "",
  selectedID: null,
  isLoading: true,
  status: "inactive",
  sortedBy: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "startFetching":
      return { ...state, isLoading: true };
    case "dataFetched":
      const updatedData = action.payload.map((job) => {
        const date = new Date(job.created).getTime();
        const today = new Date().getTime();
        const daysPassed = Math.floor((today - date) / 1000 / 60 / 60 / 24);

        return {
          ...job,
          isNew: daysPassed <= 7 ? true : false,
        };
      });
      return {
        ...state,
        data: updatedData,
        dataWithCoords: updatedData.filter((job) =>
          job.latitude ? job : null
        ),
      };
    case "fetchingEnded":
      return { ...state, isLoading: false };
    case "setQuery":
      return {
        ...state,
        query: action.payload,
        selectedID: null,
        sortedBy: null,
      };
    case "setCountry":
      return {
        ...state,
        country: action.payload,
        selectedID: null,
        sortedBy: null,
      };
    case "sort":
      if (action.payload === "minMax")
        return {
          ...state,
          data: state.data.slice().sort((a, b) => a.salary_min - b.salary_min),
          sortedBy: action.payload,
        };
      if (action.payload === "maxMin")
        return {
          ...state,
          data: state.data.slice().sort((a, b) => b.salary_min - a.salary_min),
          sortedBy: action.payload,
        };
      break;
    case "setSelectedID":
      return { ...state, selectedID: Number(action.payload) };
    case "backBtn":
      return { ...state, selectedID: null };
    default:
      throw new Error("hi madafakaz");
  }
}

//main function - Context Provider//
//////
//////

function JobsContext({ children }) {
  const [
    { country, data, query, selectedID, isLoading, dataWithCoords, sortedBy },
    dispatch,
  ] = useReducer(reducer, initialState);

  const { status } = useStatusContext();

  useEffect(
    function () {
      async function fetchData() {
        dispatch({ type: "startFetching" });
        try {
          const res = await fetch(
            `https://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=${_id}&app_key=${_key}&results_per_page=${queryNumber}&what=${query}`
          );
          const { results } = await res.json();

          dispatch({ type: "dataFetched", payload: results });
        } catch (err) {
          console.error(err);
        } finally {
          dispatch({ type: "fetchingEnded" });
        }
      }
      ///
      //derived state of StatusContext parent of JobsContext
      ///
      if (status === "active") fetchData();
      //////////////////////////////////////
    },

    [country, query, status]
  );

  return (
    <Context.Provider
      value={{
        country,
        data,
        isLoading,
        query,
        dispatch,
        selectedID,
        sortedBy,
        dataWithCoords,
        queryNumber,
      }}
    >
      {children}
    </Context.Provider>
  );
}

function useJobsCnxt() {
  const jobsCnxt = useContext(Context);
  return jobsCnxt;
}

export { JobsContext, useJobsCnxt };
