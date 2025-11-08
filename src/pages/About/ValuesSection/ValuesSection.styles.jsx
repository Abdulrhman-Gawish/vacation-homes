import styled from "styled-components";
import { motion } from "framer-motion";

const PrimaryBlue = "#2563EB";
const LightBlue = "#DBEAFE";

export const SectionHeading = styled.h2`
  text-align: center;
  font-size: 2.25rem;
  font-weight: 400;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;
export const Section = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: "#fff";
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
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


export const ValueItem = styled(motion.div)`
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
