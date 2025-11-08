import { Col } from "antd";
import { StyledCard, MapContainer, SectionTitle } from "./Map.styles";
const Map = () => {
  return (
    <Col xs={24} lg={12}>
      <StyledCard
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <SectionTitle>Sheikh Zayed Road, Dubai, UAE</SectionTitle>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9420151945615!2d55.134505675159176!3d25.0699543777931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f13435f3abe57%3A0xb4c00b9d46311cd0!2sSheikh%20Zayed%20Rd%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2seg!4v1762117878267!5m2!1sen!2seg"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer|no-referrer-when-downgrade|origin|origin-when-cross-origin|same-origin|strict-origin-when-cross-origin|unsafe-url"
            title="Dubai Location Map"
          />
        </MapContainer>
      </StyledCard>
    </Col>
  );
};

export default Map;
