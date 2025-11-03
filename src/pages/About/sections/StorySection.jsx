import {
  Section,
  Container,
  SectionHeading,
  StoryContent,
} from "@pages/About/About.styles";

const StorySection = () => {
  return (
    <Section>
      <Container>
        <SectionHeading>Our Story</SectionHeading>
        <StoryContent>
          <div>
            {" "}
            <p>
              Founded in 2010, Dubai Prime Properties has established itself as
              one of the leading real estate agencies in the UAE. With over 15
              years of experience in the Dubai property market, we have helped
              thousands of clients find their dream homes and investment
              properties.
            </p>
            <p>
              Our deep understanding of the local market, combined with our
              commitment to excellence, has made us the go-to choice for both
              local and international investors looking to make the most of
              Dubai's dynamic real estate landscape.
            </p>
            <p>
              We specialize in luxury residential properties, including villas,
              penthouses, and apartments in prime locations such as Downtown
              Dubai, Palm Jumeirah, Dubai Marina, and Emirates Hills.
            </p>
          </div>
        </StoryContent>
      </Container>
    </Section>
  );
};

export default StorySection;
