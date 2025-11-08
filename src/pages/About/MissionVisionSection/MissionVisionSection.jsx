import { Target, Eye } from "lucide-react";
import {
  Section,
  Container,
  Grid,
  MissionCard,
  CardHeader,
  IconWrapper,
  CardTitle,
  CardText,
} from "./MissionVisionSection.styles";

const MissionVisionSection = () => {
  return (
    <Section $alt>
      <Container>
        <Grid>
          <MissionCard
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CardHeader>
              <IconWrapper>
                <Target />
              </IconWrapper>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardText>
              To provide exceptional real estate services by connecting clients
              with their perfect properties while delivering unparalleled
              expertise, integrity, and personalized attention throughout every
              transaction.
            </CardText>
          </MissionCard>

          <MissionCard
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <CardHeader>
              <IconWrapper>
                <Eye />
              </IconWrapper>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardText>
              To be the most trusted and innovative real estate agency in Dubai,
              recognized for our commitment to excellence, client satisfaction,
              and our role in shaping the future of luxury living in the UAE.
            </CardText>
          </MissionCard>
        </Grid>
      </Container>
    </Section>
  );
};

export default MissionVisionSection;
