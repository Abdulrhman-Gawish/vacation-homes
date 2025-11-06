import { Row, Col, Typography } from "antd";
const { Text } = Typography;
import { features } from "@utils/features";
import {
  FeatureCard,
  FeatureDescription,
  FeatureTitle,
  FeaturesWrapper,
  IconWrapper,
  SectionDescription,
  SectionHeader,
  SectionTitle,
  StyledWhyChooseSection
} from "./WhyChooseSection.styles";
const WhyChooseSection = () => {
  return (
    <StyledWhyChooseSection>
      <div>
        <SectionHeader>
          <SectionTitle level={1}>
            Why Choose Dubai Prime Properties
          </SectionTitle>
          <SectionDescription>
            Your trusted partner in Dubai real estate
          </SectionDescription>
        </SectionHeader>

        <FeaturesWrapper>
          <Row gutter={[32, 32]}>
            {features.map((feature, index) => (
              <Col key={index} xs={24} md={8}>
                <FeatureCard>
                  <IconWrapper>
                    <feature.icon />
                  </IconWrapper>
                  <FeatureTitle level={3}>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
              </Col>
            ))}
          </Row>
        </FeaturesWrapper>
      </div>
    </StyledWhyChooseSection>
  );
};
export default WhyChooseSection;
