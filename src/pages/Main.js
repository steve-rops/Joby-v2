import { Container } from "../components/Container";
import { LeftSection } from "../components/LeftSection";
import LowerSection from "../components/LowerSection";
import RightSectionMap from "../components/RightSection_Map";
import { UpperSection } from "../components/UpperSection";
import ProtectedRoutes from "./ProtectedRoutes";

function Main() {
  return (
    <ProtectedRoutes>
      <Container>
        <LeftSection>
          <UpperSection />
          <LowerSection />
        </LeftSection>
        <RightSectionMap />
      </Container>
    </ProtectedRoutes>
  );
}

export default Main;
