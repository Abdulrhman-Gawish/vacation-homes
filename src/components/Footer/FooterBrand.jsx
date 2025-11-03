import React from "react";
import { Building2 } from "lucide-react";
import { BrandContainer, BrandText, BrandName, BrandSubtitle, Description } from "./Footer.styles";

const FooterBrand = () => (
  <div>
    <BrandContainer>
      <Building2 />
      <BrandText>
        <BrandName>Dubai Prime Properties</BrandName>
        <BrandSubtitle>Luxury Real Estate</BrandSubtitle>
      </BrandText>
    </BrandContainer>
    <Description>
      Your trusted partner in finding luxury properties in Dubai since 2010.
    </Description>
  </div>
);

export default FooterBrand;
