import React from "react";
import FooterBrand from "./FooterBrand";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterServices from "./FooterServices";
import FooterCities from "./FooterCities";
import FooterAreas from "./FooterAreas";
import FooterHomeTypes from "./FooterHomeTypes";
import FooterContact from "./FooterContact";
import FooterCopyright from "./FooterCopyright";
import { FooterContainer, FooterContent, FooterGrid, FooterSection } from "./Footer.styles";

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <FooterGrid>
        <FooterSection><FooterBrand /></FooterSection>
        <FooterSection><FooterQuickLinks /></FooterSection>
        <FooterSection><FooterServices /></FooterSection>
        <FooterSection><FooterCities /></FooterSection>
        <FooterSection><FooterAreas /></FooterSection>
        <FooterSection><FooterHomeTypes /></FooterSection>
        <FooterSection><FooterContact /></FooterSection>
      </FooterGrid>
      <FooterCopyright />
    </FooterContent>
  </FooterContainer>
);

export default Footer;
