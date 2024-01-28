import { countries } from "../data/countries";
import { useJobsCnxt } from "../contexts/JobsContext";

function JobRightSide({ workInfo }) {
  const { country } = useJobsCnxt();
  const currency = countries.filter((el) => el.short === country)[0].currency;

  let isPredicted;
  if (workInfo.salary_is_predicted === "1") isPredicted = true;

  let salary = "not available";
  if (isPredicted) {
    salary = Math.trunc(workInfo.salary_min).toString().slice(0, 2);
  }

  return (
    <div
      className={`w-2/5 flex justify-center ${
        isPredicted ? "text-indigo-500" : "text-gray-400"
      }`}
    >
      {isPredicted ? (
        <span>
          {salary}k <span className="text-gray-400">{currency}</span>
        </span>
      ) : (
        <span>{salary}</span>
      )}
    </div>
  );
}

export default JobRightSide;
