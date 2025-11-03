import React from "react";
import FooterBrand from "./FooterBrand";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterServices from "./FooterServices";
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
        <FooterSection><FooterContact /></FooterSection>
      </FooterGrid>
      <FooterCopyright />
    </FooterContent>
  </FooterContainer>
);

export default Footer;
