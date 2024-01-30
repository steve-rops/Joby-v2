import CTA from "../components/HomePage_Components/CTA";
import NavBar from "../components/HomePage_Components/NavBar";
import Banner from "../components/HomePage_Components/Banner";
import { useStatusContext } from "../contexts/StatusContext";

function LandingPage() {
  const { status } = useStatusContext();
  console.log(status);

  return (
    <div className="container: h-screen w-screen overflow-hidden">
      <NavBar />
      <CTA />
      <Banner />
    </div>
  );
}

export default LandingPage;
