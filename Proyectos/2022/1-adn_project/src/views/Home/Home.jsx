import { HrStyled } from "styled-components/App.styled";
import { AboutBody } from "./components/AboutBody";
import { AboutFooter } from "./components/AboutFooter";
import { AboutHeader } from "./components/AboutHeader";
import { SponsorSection } from "./components/SponsorSection";

const Home = () => {
  return (
    <div className="about">
      <AboutHeader />
      <AboutBody />
      <AboutFooter />
      <HrStyled />
      <SponsorSection />
    </div>
  );
};
export default Home;
