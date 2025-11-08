import styled from "styled-components";
import { motion } from "framer-motion";

const PrimaryBlue = "#2563EB";
const LightBlue = "#DBEAFE";

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
