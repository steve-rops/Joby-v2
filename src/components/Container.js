function Container({ children }) {
  return (
    <>
      <div className="app bg-indigo-50 ">
        <div className="container w-full bg-white shadow-lg">{children}</div>
      </div>
    </>
  );
}
export { Container };
