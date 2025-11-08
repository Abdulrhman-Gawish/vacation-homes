import {
  StatsWrapper,
  StatsGrid,
  StatNumber,
  StatLabel,
  Container,
} from "./StatsSection.styles";

import { stats } from "@utils/statsData";

const StatsSection = () => {
  return (
    <StatsWrapper>
      <Container>
        <StatsGrid>
          {stats.map((s, i) => (
            <div key={i}>
              <StatNumber>{s.number}</StatNumber>
              <StatLabel>{s.label}</StatLabel>
            </div>
          ))}
        </StatsGrid>
      </Container>
    </StatsWrapper>
  );
};

export default StatsSection;
