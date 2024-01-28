function SelectedItemDetails({ selectedItem }) {
  const description = selectedItem.description.slice(0, 150);
  const date = new Date(selectedItem.created).toDateString();

  return (
    <div>
      <div>
        <strong>ID:</strong> #{selectedItem.id}
      </div>
      <div>
        <strong>Job Title:</strong> {selectedItem.title}
      </div>
      <div>
        <strong>Job Description:</strong> {description}
        <a
          href={selectedItem.redirect_url}
          target="_blank"
          rel="noreferrer"
          className="text-indigo-500"
        >{`[...see More]`}</a>
      </div>
      <div>
        <strong>Job Location:</strong> {selectedItem.location.display_name}
      </div>
      <div>
        <strong>Tags:</strong> {selectedItem.category.tag}
      </div>
      <div>
        <strong>Salary: </strong>
        {selectedItem.salary_is_predicted === "1"
          ? `${selectedItem.salary_min} - ${selectedItem.salary_max}`
          : `unknown - contact employer`}
      </div>
      <div>
        <strong>Created at:</strong> {date}
      </div>
    </div>
  );
}

export default SelectedItemDetails;
