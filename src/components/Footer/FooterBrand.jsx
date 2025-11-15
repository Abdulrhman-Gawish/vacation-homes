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
        <BrandSubtitle>The Gateway to Elegant Escapes</BrandSubtitle>
      </BrandText>
    </BrandContainer>
    <Description>
      Sandy Beach Vacation Homes™ Rental LLC is a DET-licensed operator managing
      vacation rental apartments for short-term stays in Dubai. With a
      hand-picked collection of properties, our guests can enjoy beach days and
      city nights all in one stay.
    </Description>
  </div>
);

export default FooterBrand;
