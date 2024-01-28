export function Navbar() {
  return (
    <div className="h-[10%] flex items-baseline px-4 py-2 justify-between md:bg- border-light">
      <h1 className="text-3xl text-indigo-800">Joby</h1>
      <div className="flex gap-4 items-center">
        <span className="text-gray-600">About</span>
        <span className="text-gray-600">Employers</span>
        <span className="text-gray-600">Contact</span>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-md">
          LOG IN
        </button>
      </div>
    </div>
  );
}
