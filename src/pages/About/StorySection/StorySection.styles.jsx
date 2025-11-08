import styled from "styled-components";

export const SectionHeading = styled.h2`
  text-align: center;
  font-size: 2.25rem;
  font-weight: 400;
  color: #1f2937;
  margin-bottom: 1.5rem;
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
