import styled from "styled-components";
import { motion } from "framer-motion";

const PrimaryBlue = "#2563EB";
const LightBlue = "#DBEAFE";

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

export const Section = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: ${({ $alt }) => ($alt ? "#f9fafb" : "#fff")};
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const SectionHeading = styled.h2`
  text-align: center;
  font-size: 2.25rem;
  font-weight: 400;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

export const SectionText = styled.p`
  text-align: center;
  color: #4b5563;
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 3rem;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
`;

export const StoryContent = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  line-height: 1.75;
  color: #4b5563;
  font-size: 1.125rem;
  font-weight: 400;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 3rem;
  max-width: 70rem;
  margin: 0 auto;
  align-items: stretch;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const MissionCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 0.75rem;
  padding: 2.5rem 2rem;
  height: auto;
  font-weight: 400;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const IconWrapper = styled.div`
  background-color: ${LightBlue};
  border-radius: 9999px;
  padding: 1rem;
  display: flex;

  svg {
    color: ${PrimaryBlue};
    width: 2rem;
    height: 2rem;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 400;
`;

export const CardText = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  color: #4b5563;
  line-height: 1.75;
`;

export const ValuesGrid = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 80rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const ValueItem = styled.div`
  text-align: center;
`;

export const ValueIconWrapper = styled.div`
  background-color: ${LightBlue};
  border-radius: 9999px;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;

  svg {
    color: ${PrimaryBlue};
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const ValueTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 0.75rem;
  color: #1f2937;
`;

export const ValueDescription = styled.p`
  color: #4b5563;
  font-weight: 400;
`;

export const StatsWrapper = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: #1890ff;
  color: #fff;
  font-weight: 400;
`;

export const StatsGrid = styled.div`
  display: grid;
  gap: 0.25rem;
  text-align: center;
  max-width: 80rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.div`
  font-size: 1.125rem;
  opacity: 0.9;
  color: #fff;
  font-weight: 400;
`;

export const WhyGrid = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  gap: 1.5rem;
  font-size: 1.125rem;
  color: #4b5563;
  font-weight: 400;
`;

export const WhyCard = styled.div`
  width: 100%;
  h3 {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${PrimaryBlue};
    margin-bottom: 0.2rem;
    text-align: left;
  }

  p {
    color: #4b5563;
    font-weight: 400;
    margin-bottom: 0.5rem;
    text-align: left;
    line-height: 1.5;
  }
`;
