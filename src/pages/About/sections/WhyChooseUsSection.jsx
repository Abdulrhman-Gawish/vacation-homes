import {
  Section,
  Container,
  SectionHeading,
  WhyGrid,
  WhyCard,
} from "@pages/About/About.styles";
import { reasons } from "@utils/whyChooseUsData";

const WhyChooseUsSection = () => {
  return (
    <Section>
      <Container>
        <SectionHeading>Why Choose Us</SectionHeading>

        <WhyGrid>
          {reasons.map((r, i) => (
            <WhyCard key={i}>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </WhyCard>
          ))}
        </WhyGrid>
      </Container>
    </Section>
  );
};

export default WhyChooseUsSection;
