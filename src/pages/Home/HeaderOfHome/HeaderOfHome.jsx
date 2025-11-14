import { useNavigate } from "react-router-dom";
import DubaiSkyline from "@assets/dubai-skyline.jpg";
import {
  HeroSection,
  BackgroundImage,
  Overlay,
  ContentWrapper,
  HeroTitle,
  HeroSubtitle,
  ButtonGroup,
  StyledButton,
} from "./HeaderOfHome.styles";
import { Row } from "antd";

const HeaderOfHome = () => {
  const navigate = useNavigate();

  const onNavigate = (path) => {
    if (path === "contact") navigate("/contact");
    if (path === "about") navigate("/about");
  };

  return (
    <HeroSection>
      <BackgroundImage src={DubaiSkyline} alt="Dubai Skyline" />

      <Overlay />

      <Row>
        <ContentWrapper>
          <HeroTitle>
            Discover your Prime Short Stay in the Heart of UAE within Dubai
          </HeroTitle>
          <HeroSubtitle>
            Enjoy your Beach Days, City Nights _ all in One Stay
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
};
export default HeaderOfHome;
