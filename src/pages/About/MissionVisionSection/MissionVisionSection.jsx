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
              To deliver reliable, high-quality short-stay rental homes across
              Dubai’s most desirable neighbourhoods, offering flexible stay
              options, exceptional guest support, and consistent value for both
              business and leisure travellers.
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
              To become the preferred partner for guests and property owners in
              Dubai’s short-term stay sector — defined by operational excellence,
              transparent performance, and a growing portfolio of rentals
              trusted for comfort, convenience, and integrity.
            </CardText>
          </MissionCard>
        </Grid>
      </Container>
    </Section>
  );
};

export default MissionVisionSection;
