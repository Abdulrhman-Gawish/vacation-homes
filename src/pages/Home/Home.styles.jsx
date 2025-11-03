import styled from "styled-components";
import { Button } from "antd";

export const BackgroundImage = styled.img`
  position: absolute;
  // inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  // z-index: 0;

  @media (min-width: 768px) {
    object-position: bottom;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom right,
    rgba(51, 65, 85, 0.7),
    rgba(15, 23, 42, 0.85),
    rgba(2, 6, 23, 0.9)
  );
  z-index: 1;
`;

export const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  text-align: center;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh; 
`;

export const ContentWrapper = styled.div`
  // position: relative;
  z-index: 2;
  // max-width: 900px;
  // margin: 0 auto;
  padding: 8rem 2rem;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  color: #e5e7eb;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const StyledButton = styled(Button)`
  font-weight: 500;
  border-radius: 6px;
  padding: 0 2rem;
  height: 2.8rem;
  transition: all 0.3s ease;

  color: ${({ textcolor }) => textcolor || "#fff"};
  background-color: ${({ bgcolor }) => bgcolor || "transparent"};
  border-color: ${({ bordercolor }) => bordercolor || "transparent"};

  &:hover {
    background-color: ${({ hoverbg }) => hoverbg || "rgba(255,255,255,0.1)"};
    color: ${({ hovercolor }) => hovercolor || "#fff"};
    border-color: ${({ hoverborder }) => hoverborder || "#fff"};
  }
`;
