import { Row, Col } from "antd";
import {
  CardText,
  CardTitle,
  ContactCard,
  ContactSection,
  Container,
  IconWrapper,
} from "./ContactInfo.styles";
import { contactInformation } from "@utils/contactInformation";
const ContactInfo = () => {
  return (
    <ContactSection>
      <Container>
        <Row gutter={[24, 24]}>
          {contactInformation.map((info, index) => (
            <Col key={index} xs={24} sm={12} lg={6}>
              <ContactCard $delay={`${index * 0.1}s`}>
                <IconWrapper>
                  <info.icon />
                </IconWrapper>
                <CardTitle level={4}>{info.title}</CardTitle>
                {info.details.map((detail, idx) => (
                  <CardText key={idx}>{detail}</CardText>
                ))}
              </ContactCard>
            </Col>
          ))}
        </Row>
      </Container>
    </ContactSection>
  );
};

export default ContactInfo;
