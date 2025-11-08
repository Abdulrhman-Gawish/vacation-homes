import {
  Section,
  Container,
  SectionHeading,
  SectionText,
  ValuesGrid,
  ValueItem,
  ValueIconWrapper,
  ValueTitle,
  ValueDescription,
} from "./ValuesSection.styles";

import { values } from "@utils/valuesData";

const ValuesSection = () => {
  return (
    <Section>
      <Container>
        <SectionHeading>Our Core Values</SectionHeading>
        <SectionText>The principles that guide everything we do</SectionText>

        <ValuesGrid>
          {values.map((value, idx) => (
            <ValueItem
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <ValueIconWrapper>
                <value.icon />
              </ValueIconWrapper>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueItem>
          ))}
        </ValuesGrid>
      </Container>
    </Section>
  );
};

export default ValuesSection;
