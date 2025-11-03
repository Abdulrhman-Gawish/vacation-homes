import { useNavigate } from "react-router-dom";
import {
  HeroSection,
  BackgroundImage,
  Overlay,
  ContentWrapper,
  HeroTitle,
  HeroSubtitle,
  ButtonGroup,
  StyledButton,
} from "./Home.styles";
import { Row } from "antd";
import DubaiSkyline from "@assets/dubai-skyline.jpg";

export default function Home() {
  const navigate = useNavigate();

  const onNavigate = (path) => {
    if (path === "contact") navigate("/contact");
    if (path === "about") navigate("/about");
  };

  return (
    <HeroSection>
      <BackgroundImage src={DubaiSkyline} alt="Dubai Skyline" />

      <Overlay />

      <Row justify="center" style={{ width: "100%", margin: 0 }}>
        <ContentWrapper>
          <HeroTitle>Discover Your Dream Property in Dubai</HeroTitle>
          <HeroSubtitle>
            Premium real estate solutions in the heart of the UAE
          </HeroSubtitle>

          <ButtonGroup>
            <StyledButton
              size="large"
              bgcolor="#3b82f6"
              bordercolor="#3b82f6"
              hoverbg="#2563eb"
              onClick={() => onNavigate("contact")}
            >
              Get Started
            </StyledButton>

            <StyledButton
              size="large"
              textcolor="#ffffff"
              bordercolor="#ffffff"
              hoverbg="rgba(255,255,255,0.1)"
              onClick={() => onNavigate("about")}
            >
              Learn More
            </StyledButton>
          </ButtonGroup>
        </ContentWrapper>
      </Row>
    </HeroSection>
  );
}
