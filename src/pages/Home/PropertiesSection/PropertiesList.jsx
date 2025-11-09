import PropertyCard from "./PropertyCard";

const PropertiesList = ({ properties }) => {
  return (
    <>
      {properties.map((property, idx) => (
        <PropertyCard key={`${property.id}-${idx}`} property={property} />
      ))}
    </>
  );
};

export default PropertiesList;
