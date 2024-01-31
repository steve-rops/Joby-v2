import CTA from "../components/HomePage_Components/CTA";
import NavBar from "../components/HomePage_Components/NavBar";
import Banner from "../components/HomePage_Components/Banner";

function LandingPage() {
  return (
    <div className="container: h-screen w-screen overflow-hidden">
      <NavBar />

      <CTA />
      <Banner />
    </div>
  );
}

export default LandingPage;
