import { useNavigate } from "react-router-dom";
import { useJobsCnxt } from "../contexts/JobsContext";

function BackButtonIcon() {
  const { dispatch } = useJobsCnxt();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        dispatch({ type: "backBtn" });
        navigate(-1);
      }}
      className="rounded-full w-fit h-fit px-2 flex items-center justify-center ratio-1 border-indigo-600 border-[1px] cursor-pointer"
    >
      <span className="pb-1 text-2xl text-indigo-600">
        <em>&larr;</em>
      </span>
    </div>
  );
}

export default BackButtonIcon;
