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
        <SectionTitle>DIC, Saih Shuaib 3, bld.WHP2-block A, office.P2AG-K13, Dubai, UAE</SectionTitle>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4421.41295541616!2d55.06006397537079!3d24.86074897792916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUxJzM4LjciTiA1NcKwMDMnNDUuNSJF!5e1!3m2!1sen!2seg!4v1762693918609!5m2!1sen!2seg"
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
