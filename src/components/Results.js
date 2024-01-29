import { countries } from "../data/countries";
import { useJobsCnxt } from "../contexts/JobsContext";

export function Results() {
  const { country, data, queryNumber } = useJobsCnxt();
  if (data.length < queryNumber) return;
  const countrr = countries.filter((c) => c.short === country)[0].countryName;

  return (
    <div className="px-4 py-2 h-[5%] flex items-center gap-2">
      <span>
        <strong className="text-xl">{data.length} Results</strong>
      </span>
      <span className="text-gray-500">in {countrr}</span>
    </div>
  );
}
