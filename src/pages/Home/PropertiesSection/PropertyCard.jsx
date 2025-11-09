import {
  PropertyCard as Card,
  PropertyImage,
  PropertyTitle,
  PropertyLocation,
  PropertyDetails,
} from "./PropertiesSection.styles";

const PropertyCard = ({ property }) => {
  return (
    <Card>
      <PropertyImage
        src={property.image}
        alt={property.title}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/400x300?text=Property+Image";
        }}
      />
      <div>
        <PropertyTitle level={4}>{property.title}</PropertyTitle>
        <PropertyLocation>{property.location}</PropertyLocation>
        <PropertyDetails>
          <span>{property.beds} Beds</span>
          <span>•</span>
          <span>{property.baths} Baths</span>
          <span>•</span>
          <span>{property.sqft} sq ft</span>
        </PropertyDetails>
      </div>
    </Card>
  );
};

export default PropertyCard;
