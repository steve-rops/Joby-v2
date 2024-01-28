function Created({ workInfo }) {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const date = new Date(workInfo.created).toLocaleDateString();
  return <div className="text-sm pr-2 text-indigo-300">created {date}</div>;
}

export default Created;
