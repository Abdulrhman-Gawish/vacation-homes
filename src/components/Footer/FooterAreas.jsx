import React from "react";
import { SectionTitle, LinkList, LinkItem } from "./Footer.styles";

const FooterAreas = () => (
  <div>
    <SectionTitle>Areas</SectionTitle>
    <LinkList>
      <LinkItem><a href="#">Dubai Marina</a></LinkItem>
      <LinkItem><a href="#">Business Bay</a></LinkItem>
      <LinkItem><a href="#">Downtown Dubai</a></LinkItem>
      <LinkItem><a href="#">Palm Jumeirah</a></LinkItem>
      <LinkItem><a href="#">Jumeirah Beach Residence</a></LinkItem>
    </LinkList>
  </div>
);

export default FooterAreas;
