import React from "react";
import { Building2 } from "lucide-react";
import {
  BrandContainer,
  BrandText,
  BrandName,
  BrandSubtitle,
  Description,
} from "./Footer.styles";

const FooterBrand = () => (
  <div>
    <BrandContainer>
      <Building2 />
      <BrandText>
        <BrandName>Sandy Beach Vacation Homes</BrandName>
        <BrandSubtitle>Enjoy your Beach Days, City Nights _ all in One Stay</BrandSubtitle>
      </BrandText>
    </BrandContainer>
    <Description>
      Sandy Beach Vacation Homes™ Rental LLC is a DET licensed Operator managing
      vacation rental apartments for short term stay in Dubai. With a handpicked
      collection of properties, our guests will enjoy Beach Days, City Nights _
      all in one stay.
    </Description>
  </div>
);

export default FooterBrand;
