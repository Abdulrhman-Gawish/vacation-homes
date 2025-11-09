import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { SectionTitle, ContactInfo, SocialIcons } from "./Footer.styles";

const FooterContact = () => (
  <div>
    <SectionTitle>Contact Us</SectionTitle>
    <ContactInfo>
      <p>DIC, Saih Shuaib 3, bld.WHP2-block A, office.P2AG-K13, Dubai</p>
      <p>+971 4 XXX XXXX</p>
      <p>info@dubaiprimeproperties.ae</p>
      <SocialIcons>
        <FacebookOutlined />
        <InstagramOutlined />
        <TwitterOutlined />
        <LinkedinOutlined />
      </SocialIcons>
    </ContactInfo>
  </div>
);

export default FooterContact;
