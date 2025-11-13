import React from "react";
import { SectionTitle, LinkList, LinkItem } from "./Footer.styles";

const FooterHomeTypes = () => (
  <div>
    <SectionTitle>Holiday Homes By Types</SectionTitle>
    <LinkList>
      <LinkItem><a href="#">Studio Apartments</a></LinkItem>
      <LinkItem><a href="#">1 Bedroom Apartments</a></LinkItem>
      <LinkItem><a href="#">2 Bedroom Apartments</a></LinkItem>
      <LinkItem><a href="#">3 Bedroom Apartments</a></LinkItem>
      <LinkItem><a href="#">Pentahouses</a></LinkItem>
      <LinkItem><a href="#"> Villas</a></LinkItem>
    </LinkList>
  </div>
);

export default FooterHomeTypes;
