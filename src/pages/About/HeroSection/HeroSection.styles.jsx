import styled from "styled-components";
export const HeroWrapper = styled.section`
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const HeroContent = styled.div`
  z-index: 10;
  text-align: center;
  color: #fff;
  padding: 0 1rem;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;
