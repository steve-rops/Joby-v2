import NavBar from "../components/HomePage_Components/NavBar";

function Employers() {
  return (
    <div>
      <NavBar />
      <div className="p-2 px-8">
        <span className="text-lg">Active Employers: </span>
        <div className="w-fit h-20 bg-indigo-100 border-2 border-indigo-700 rounded-md shadow-md grid place-items-center">
          <span className="px-2">
            <a
              href="https://developer.adzuna.com/"
              target="_blank"
              rel="noreferrer"
            >
              Adzuna API
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Employers;
