import {
  HeroWrapper,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  BackgroundImage,
} from "./HeroSection.styles";
import about from "@assets/about.jpg";
const HeroSection = () => (
  <HeroWrapper>
    <BackgroundImage src={about} alt="about" />
    <HeroOverlay />

    <HeroContent>
      <HeroTitle>About Sandy Beach Vacation Homes</HeroTitle>
      <HeroSubtitle>Your Trusted Partner Since 2020</HeroSubtitle>
    </HeroContent>
  </HeroWrapper>
);

export default HeroSection;
