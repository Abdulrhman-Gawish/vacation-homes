import styled from "styled-components";
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
export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;
