import { useJobsCnxt } from "../contexts/JobsContext";
import { Job } from "./Job";

export function Jobs() {
  const { data } = useJobsCnxt();
  console.log(data);

  return (
    <div className="w-full h-[75%] px-4 py-2 pb-4 overflow-y-scroll">
      {data.map((w) => (
        <Job workInfo={w} key={w.id} />
      ))}
    </div>
  );
}
