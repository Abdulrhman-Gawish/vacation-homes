import {
  Section,
  Container,
  SectionHeading,
  StoryContent,
} from "./StorySection.styles";

const StorySection = () => {
  return (
    <Section>
      <Container>
        <SectionHeading>Our Story</SectionHeading>
        <StoryContent>
          <div>
            <p>
              Sandy Beach Vacation Homes Rental LLC was born from a simple
              observation: while Dubai offered countless short-stay options,
              many lacked the consistency, comfort, and hospitality travellers
              truly deserve. Determined to raise the standard, our founders
              Gawish Sons launched the company in 2020 with a clear vision — to
              create reliable, high-quality homes where guests feel genuinely
              cared for.
            </p>

            <p>
              Today, Sandy Beach is a trusted name in Dubai’s short-stay
              sector, offering beautifully furnished apartments, villas, and
              studios across the city’s most desirable neighbourhoods. With a
              handpicked portfolio of over 100 properties, each home is designed
              to deliver the perfect balance of comfort and convenience —
              complete with high-speed WiFi, modern interiors, fully equipped
              kitchens, and thoughtful, guest-centric amenities.
            </p>

            <p>
              From Downtown and Business Bay to Dubai Marina, JBR, Palm
              Jumeirah, JLT, JVC, Dubai Land, and Al Barsha Heights, our
              locations give travellers seamless access to Dubai’s landmarks
              while providing peaceful spaces to relax and recharge.
            </p>

            <p>
              At Sandy Beach, we don’t just offer places to stay — we create
              memorable experiences shaped around the way you want to live,
              work, and unwind.
            </p>
          </div>
        </StoryContent>
      </Container>
    </Section>
  );
};

export default StorySection;
