import React from "react";
import { SectionTitle, LinkList, LinkItem } from "./Footer.styles";

const FooterServices = () => (
  <div>
    <SectionTitle>Services</SectionTitle>
    <LinkList>
      <LinkItem><a href="#">Property Sales</a></LinkItem>
      <LinkItem><a href="#">Property Rentals</a></LinkItem>
      <LinkItem><a href="#">Investment Consulting</a></LinkItem>
      <LinkItem><a href="#">Property Management</a></LinkItem>
    </LinkList>
  </div>
);

export default FooterServices;
