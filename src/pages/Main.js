import { Container } from "../components/Container";
import { LeftSection } from "../components/LeftSection";
import LowerSection from "../components/LowerSection";
import RightSectionMap from "../components/RightSection_Map";
import { UpperSection } from "../components/UpperSection";

function Main() {
  return (
    <Container>
      <LeftSection>
        <UpperSection />
        <LowerSection />
      </LeftSection>
      <RightSectionMap />
    </Container>
  );
}

export default Main;
