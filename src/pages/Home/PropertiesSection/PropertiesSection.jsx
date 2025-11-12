import { useNavigate } from "react-router-dom";
import {
  ButtonWrapper,
  Container,
  ImageWrapper,
  StyledPropertiesSection,
  PropertyCard,
  PropertyDetails,
  PropertyImage,
  PropertyLocation,
  PropertyPrice,
  PropertyTitle,
  SectionDescription,
  SectionHeader,
  ViewAllButton,
} from "./PropertiesSection.styles";
import { Row, Col, Typography } from "antd";
const { Title } = Typography;
import { properties } from "@utils/properties";
const PropertiesSection = () => {
  const navigate = useNavigate();

  const onNavigate = (path) => {
    if (path === "contact") navigate("/contact");
    if (path === "about") navigate("/about");
  };
  return (
    <StyledPropertiesSection>
      <Container>
        <SectionHeader>
          <Title level={1}>Featured Properties</Title>
          <SectionDescription>
            Explore our handpicked selection of luxury properties
          </SectionDescription>
        </SectionHeader>

        <Row gutter={[32, 32]}>
          {properties.map((property) => (
            <Col key={property.id} xs={24} md={12} lg={8}>
              <PropertyCard>
                <ImageWrapper>
                  <PropertyImage
                    src={property.image}
                    alt={property.title}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=Property+Image";
                    }}
                  />
                </ImageWrapper>
                <div>
                  <PropertyTitle level={4}>{property.title}</PropertyTitle>
                  <PropertyLocation>{property.location}</PropertyLocation>
                </div>
              </PropertyCard>
            </Col>
          ))}
        </Row>

        <ButtonWrapper>
          <ViewAllButton
            type="primary"
            size="large"
            onClick={() => onNavigate("contact")}
          >
            View All Properties
          </ViewAllButton>
        </ButtonWrapper>
      </Container>
    </StyledPropertiesSection>
  );
};
export default PropertiesSection;
