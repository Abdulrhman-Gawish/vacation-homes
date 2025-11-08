import {
  HeroWrapper,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  BackgroundImage
} from "./HeroSection.styles";
import about from "@assets/about.jpg";
const HeroSection = () => (
  <HeroWrapper>
    <BackgroundImage src={about} alt="about"/>
    <HeroOverlay />

    <HeroContent>
      <HeroTitle>About Dubai Prime Properties</HeroTitle>
      <HeroSubtitle>Your Trusted Real Estate Partner Since 2010</HeroSubtitle>
    </HeroContent>
  </HeroWrapper>
);

export default HeroSection;
