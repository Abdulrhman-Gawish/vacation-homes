import { stats } from "@utils/stats";
import {
  IconWrapper,
  StatCard,
  StatValue,
  StatsContainer,
  StyledSection,
} from "./StatsSection.styles";
import { Row, Col, Typography } from "antd";
const { Text } = Typography;
const StatsSection = () => {
  return (
    <StyledSection>
      <StatsContainer>
        <Row gutter={[32, 32]}>
          {stats.map((stat, index) => (
            <Col key={index} xs={12} md={6}>
              <StatCard>
                <IconWrapper>
                  <stat.icon />
                </IconWrapper>
                <StatValue level={2}>{stat.value}</StatValue>
                <Text>{stat.label}</Text>
              </StatCard>
            </Col>
          ))}
        </Row>
      </StatsContainer>
    </StyledSection>
  );
};
export default StatsSection;
