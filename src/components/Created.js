function Created({ workInfo }) {
  const date = new Date(workInfo.created).toLocaleDateString();
  return <div className="text-sm pr-2 text-indigo-300">created {date}</div>;
}

export default Created;
