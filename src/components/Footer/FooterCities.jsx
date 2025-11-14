import React from "react";
import { SectionTitle, LinkList, LinkItem } from "./Footer.styles";

const FooterCities = () => (
  <div>
    <SectionTitle>Cities</SectionTitle>
    <LinkList>
      <LinkItem><a href="#">Dubai</a></LinkItem>
      <LinkItem><a href="#">Sharjah</a></LinkItem>
    </LinkList>
  </div>
);

export default FooterCities;
