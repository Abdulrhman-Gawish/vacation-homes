import styled from "styled-components";

const PrimaryBlue = "#2563EB";

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
  background-color: ${({ $alt }) => ($alt ? "#f9fafb" : "#fff")};
`;
export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
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
