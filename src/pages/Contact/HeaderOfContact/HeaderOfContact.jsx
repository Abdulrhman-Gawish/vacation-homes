import {
  Container,
  MainTitle,
  SubTitle,
  TouchSection,
} from "./HeaderOfContact.styles";

const HeaderOfContact = () => {
  return (
    <TouchSection>
      <Container>
        <MainTitle level={1}>Get In Touch</MainTitle>
        <SubTitle>
          We'd love to hear from you. Reach out to us for any inquiries.
        </SubTitle>
      </Container>
    </TouchSection>
  );
};

export default HeaderOfContact;
