import HeroSection from "@pages/About/sections/HeroSection";
import StorySection from "@pages/About/sections/StorySection";
import MissionVisionSection from "@pages/About/sections/MissionVisionSection";
import ValuesSection from "@pages/About/sections/ValuesSection";
import StatsSection from "@pages/About/sections/StatsSection";
import WhyChooseUsSection from "@pages/About/sections/WhyChooseUsSection";
import { AboutContainer } from "@pages/About/About.styles";

function About() {
  return (
    <AboutContainer>
      <HeroSection />
      <StorySection />
      <MissionVisionSection />
      <ValuesSection />
      <StatsSection />
      <WhyChooseUsSection />
    </AboutContainer>
  );
}

export default About;
