function JobLeftSide({ workInfo }) {
  return (
    <div className="LEFT-SIDE w-3/5">
      <div className="gap-2 flex items-center align-center text-gray-600">
        <h3 className="text-gray-500 text-sm">
          {workInfo.company.display_name}
        </h3>
        <span className="bg-indigo-500 text-white text-sm p-1 rounded-md">
          Adzuna
        </span>
        {workInfo.isNew ? (
          <span className="bg-yellow-400 text-yellow-800 py-1 px-2 rounded-lg">
            new
          </span>
        ) : (
          ""
        )}
      </div>
      <h2 className="jobname text-black text-xl">{workInfo.title}</h2>
    </div>
  );
}

export default JobLeftSide;
