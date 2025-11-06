import { Row, Col } from "antd";

import { services } from "@utils/services";
import {
  AdditionalText,
  CardDescription,
  CardTitle,
  FeatureCard,
  IconWrapper,
  ServicesContainer,
  ServicesSection,
} from "./AdditionalServicesSection.styles";
const AdditionalServices = () => {
  return (
    <ServicesSection>
      <ServicesContainer>
        <Row gutter={[32, 32]}>
          {services.map((service, index) => (
            <Col key={index} xs={24} md={12}>
              <FeatureCard
                initial={{ opacity: 0, ...service.animation }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <IconWrapper>
                  <service.icon />
                </IconWrapper>
                <CardTitle level={3}>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
                {service.additionalText && (
                  <AdditionalText>{service.additionalText}</AdditionalText>
                )}
              </FeatureCard>
            </Col>
          ))}
        </Row>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default AdditionalServices;
