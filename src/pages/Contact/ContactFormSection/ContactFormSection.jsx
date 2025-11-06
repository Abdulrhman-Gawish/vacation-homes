import { Row, Col, Form } from "antd";
import {
  Container,

  FormSection,

} from "./ContactFormSection.styles";
import ContactForm from "@components/ContactForm/ContactForm";
import Map from "@components/Map/Map";
const ContactFormSection = () => {
  return (
    <FormSection>
      <Container>
        <Row gutter={[48, 48]}>
          <ContactForm />
          <Map />
        </Row>
      </Container>
    </FormSection>
  );
};

export default ContactFormSection;
