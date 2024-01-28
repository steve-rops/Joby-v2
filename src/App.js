import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { DetailedInfo } from "./components/DetailedInfo";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import Employers from "./pages/Employers";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="employers" element={<Employers />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<Main />}>
          <Route path=":id" element={<DetailedInfo />} />
        </Route>
      </Routes>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}
export default App;
