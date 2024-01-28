import { useNavigate } from "react-router-dom";
import { useJobsCnxt } from "../contexts/JobsContext";

function SelectedItemFooterBtns({ selectedItem }) {
  const { dispatch } = useJobsCnxt();
  const navigate = useNavigate();
  return (
    <div className="flex gap-2">
      <button className="bg-indigo-500 p-2 rounded-md my-2 text-white">
        <a href={selectedItem.redirect_url} rel="noreferrer" target="_blank">
          learn more
        </a>
      </button>
      <button
        onClick={() => {
          dispatch({ type: "backBtn" });
          navigate(-1);
        }}
        className=" p-2 rounded-md my-2 text-indigo-500 border-[1px] border-indigo-500"
      >
        Go Back
      </button>
    </div>
  );
}

export { SelectedItemFooterBtns };
