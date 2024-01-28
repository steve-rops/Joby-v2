function JobCategoryTags({ workInfo }) {
  const tags = workInfo.category.tag
    .split("-")
    .filter((value) => value !== "jobs");

  return (
    <div>
      {tags.map((el) => (
        <span
          key={el}
          className="border-[1px] border-gray-400 text-gray-400 text-sm p-1 mr-2 m-1 rounded-md"
        >
          {el}
        </span>
      ))}
    </div>
  );
}

export default JobCategoryTags;
