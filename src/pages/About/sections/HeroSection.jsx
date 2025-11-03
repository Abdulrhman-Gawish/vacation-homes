import {
  HeroWrapper,
  HeroBackground,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
} from "@pages/About/About.styles";

const HeroSection = () => (
  <HeroWrapper>
    <HeroBackground />
    <HeroOverlay />

    <HeroContent>
      <HeroTitle>About Dubai Prime Properties</HeroTitle>
      <HeroSubtitle>Your Trusted Real Estate Partner Since 2010</HeroSubtitle>
    </HeroContent>
  </HeroWrapper>
);

export default HeroSection;
